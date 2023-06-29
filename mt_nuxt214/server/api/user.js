const Router = require("koa-router")

const user_router = new Router({
    prefix: "/user"
})

const Redis = require("ioredis")
const redis = new Redis()

const { isEmail } = require('methods-util/dist/node/methods_util.cjs')
const { aesEncode, aesDecode, SmtpServer, createSlat, hash256, formatDate } = require('../util')

user_router.post('/signup', async ctx => {
    let { email, password, readlic, grade } = ctx.request.body

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
    // 加盐加密
    let slat = createSlat()
    let pwd = hash256(slat + password)

    try {

        const [rows] = await ctx.state.$mysql.execute(`INSERT INTO mt_users (username,email,password,slat,grade,create_time) VALUES (?,?,?,?,?,?);`, [nickname, email, pwd, slat, grade, createTime])
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

    let slatRes = await ctx.state.$mysql.query(`select slat from mt_users where email="${email}"`)
    if (slatRes[0].length == 0) {
        return ctx.body = {
            code: 0,
            msg: "未注册该用户"
        }
    }
    let slat = slatRes[0][0].slat
    let pwd = hash256(slat + password)

    try {
        let [rows] = await ctx.state.$mysql.query(`select id,active,username,avatar,grade,birthday from mt_users where email=? and password=?`, [email, pwd])
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
        delete user.active
        if (!!user.birthday) {
            user = Object.assign(user, { birthday: formatDate(user.birthday, "yyyy-MM-dd") })
        }
        ctx.session.user = user.id
        return ctx.body = {
            code: 1,
            user
        }
    } catch (err) {
        console.log(err)
    }
})

user_router.post('/signout', async ctx => {

})

user_router.get('/getUser', async ctx => {

    let user = ctx.session.user
    if (user === undefined) {
        return ctx.body = {
            code: -1,
            msg: "未登录"
        }
    }

    let userRes = await ctx.state.$mysql.execute(`select id,username,avatar,grade,birthday from mt_users where id=${user}`)

    let userInfo = userRes[0][0]
    if (!!userInfo.birthday) {
        userInfo = Object.assign(userInfo, { birthday: formatDate(userInfo.birthday, "yyyy-MM-dd") })
    }

    return ctx.body = {
        code: 1,
        data: userInfo
    }
})

user_router.post('/change/username', async ctx => {
    let { username } = ctx.request.body
    if (!username) {
        return ctx.body = {
            code: -1,
            msg: "用户名不能为空"
        }
    }
    try {
        let [rows] = await ctx.state.$mysql.execute(`update mt_users set username="${username}" where id=${ctx.session.user}`)
        if (rows.changedRows === 1) {
            return ctx.body = {
                code: 1
            }
        } else {
            return ctx.body = {
                code: 0,
                msg: "修改用户名失败"
            }
        }
    } catch (e) {
        return ctx.body = {
            code: 0,
            msg: e
        }
    }
})

user_router.post('/change/birthday', async ctx => {
    let { birthday } = ctx.request.body
    if (!birthday) {
        return ctx.body = {
            code: -1,
            msg: "生日信息不能为空"
        }
    }
    try {
        let [rows] = await ctx.state.$mysql.execute(`update mt_users set birthday="${birthday}" where id=${ctx.session.user}`)
        if (rows.changedRows === 1) {
            return ctx.body = {
                code: 1
            }
        } else {
            return ctx.body = {
                code: 0,
                msg: "修改生日信息失败"
            }
        }
    } catch (e) {
        return ctx.body = {
            code: 0,
            msg: e
        }
    }
})

user_router.post('/change/password', async ctx => {
    let { password, new_password, confirm_password, grade } = ctx.request.body
    if (!password || !new_password || !confirm_password || !grade) {
        return ctx.body = {
            code: -1,
            msg: "password and new_password and confirm_password params cannot be empty"
        }
    }
    if (new_password !== confirm_password) {
        return ctx.body = {
            code: -1,
            msg: "new_password not equal confirm_password"
        }
    }
    try {
        let [[pwdValid]] = await ctx.state.$mysql.execute(`select slat,password from mt_users where id=${ctx.session.user}`)

        let checkCurPwd = hash256(pwdValid.slat + password)

        if (checkCurPwd !== pwdValid.password) {
            return ctx.body = {
                code: 0,
                msg: "当前密码错误"
            }
        }

        let newSlat = createSlat()
        let newPwd = hash256(newSlat + new_password)

        let [rows] = await ctx.state.$mysql.execute(`update mt_users set slat="${newSlat}",password="${newPwd}",grade=${grade} where id=${ctx.session.user}`)
        if (rows.changedRows === 1) {
            return ctx.body = {
                code: 1
            }
        } else {
            return ctx.body = {
                code: 0,
                msg: "修改密码失败"
            }
        }
    } catch (e) {
        return ctx.body = {
            code: 0,
            msg: e
        }
    }
})

module.exports = user_router