const Router = require("koa-router")

const user_router = new Router({
    prefix: "/user"
})

const Redis = require("ioredis")
const redis = new Redis()

const { isEmail } = require('methods-util/dist/node/methods_util.cjs')
const { aesEncode, aesDecode, SmtpServer, setToken } = require('../util')

user_router.post('/signup', async ctx => {
    let { email, password, readlic } = ctx.request.body

    if (!email || !password || readlic !== 1) {
        return ctx.body = {
            code: -1
        }
    }

    if (!isEmail(email)) {
        return ctx.body = {
            code: -1
        }
    }

    let createTime = parseInt(Date.now() / 1000)
    let nickname = `NF` + parseInt(Math.random() * 1e10)
    try {

        const [rows] = await ctx.state.$mysql.execute(`INSERT INTO mt_users (username,email,password,create_time) VALUES (?,?,?,?);`, [nickname, email, password, createTime])
        if (rows.affectedRows === 1) {
            let hashid = aesEncode(`${rows.insertId}_${Date.now()}`).encryptedData
            redis.set(hashid, "1", "EX", 86400)
            SmtpServer(email, `<h1>您正在注册《美团》</h1> 点击下方链接进行激活 <i>该链接1天后失效</i> <br /> <a href="http://127.0.0.1:3000/user/active/${hashid}">激活</a></a>`)
            return ctx.body = {
                code: 1,
                msg: "注册成功"
            }
        }
        return ctx.body = {
            code: 0,
            msg: "注册失败，请重试"
        }
    } catch (e) {
        let code = 0
        if (e.code == "ER_DUP_ENTRY" && e.sqlMessage.includes("for key 'email'")) {
            return ctx.body = {
                code,
                msg: "该邮箱已被注册"
            }
        } else {
            return ctx.body = {
                code,
                msg: "注册失败，请重试"
            }
        }
    }
})

user_router.get('/active/:hashid', async ctx => {
    try {
        let hashid = ctx.params.hashid
        let result = await redis.get(hashid);
        if (result === null) {
            return ctx.body = `<h1>激活链接已过期</h1>`
        } else {
            // 激活用户 修改用户数据表active的值
            let decode_str = aesDecode(hashid)
            let user_id = decode_str.substring(0, decode_str.indexOf('_'))
            const [rows] = await ctx.state.$mysql.query(`update mt_users set active=1 where id = ? `, user_id)
            if (rows.changedRows === 0) {
                return ctx.body = "<h1>已激活，无需再激活了</h1>"
            }
            return ctx.body = "<h1>激活成功</h1>"
        }
    } catch (err) {
        console.error(err);
        return ctx.body = `<h1>程序崩溃了，请稍后重试...</h1>`
    }

})

user_router.post('/signin', async ctx => {
    let { email, password, readlic } = ctx.request.body

    if (!email || !password || readlic !== 1) {
        return ctx.body = {
            code: -1
        }
    }

    if (!isEmail(email)) {
        return ctx.body = {
            code: -1
        }
    }

    try {
        let [rows] = await ctx.state.$mysql.query(`select id,email,password,active from mt_users where email=? and password=?`, [email, password])
        if (rows.length === 0) {
            return ctx.body = {
                code: 0,
                msg: "邮箱或密码错误"
            }
        }
        let user = rows[0]
        if (user.active !== 1) {
            return ctx.body = {
                code: 0,
                msg: "当前用户未激活"
            }
        }
        let token = setToken(Object.assign({ user }, { time: Date.now() }))
        return ctx.body = {
            code: 1,
            token
        }
    } catch (err) {
        console.log(err)
    }
})

user_router.post('/signout', async ctx => {

})

module.exports = user_router