const Router = require('koa-router')
const multer = require('@koa/multer');
const FdfsClient = require('fdfs')
const { fdfsServer } = require('../conf')

const fdfs = new FdfsClient({
    // tracker servers
    trackers: [
        {
            host: fdfsServer.host,
            port: fdfsServer.port
        }
    ],
    // 默认超时时间10s
    timeout: 10000,
})


const upload_router = new Router({
    prefix: '/upload'
})

const upload = multer()

upload_router.post('/change/avatar', upload.single('avatar'), async ctx => {

    if (!ctx.file) {
        return ctx.body = {
            code: -1,
            msg: "没有接收到文件"
        }
    }

    if (!ctx.file.hasOwnProperty('mimetype')) {
        return ctx.body = {
            code: -1,
            msg: "avatar为文件上传必须参数"
        }
    }

    if (!ctx.file.mimetype.includes("image")) {
        return ctx.body = {
            code: 0,
            msg: "文件必须是image类型"
        }
    }

    if (ctx.file.size > 2097152) {
        return ctx.body = {
            code: 0,
            msg: "图片文件大小不能超过2MB"
        }
    }

    let user = ctx.session.user

    try {
        let fileId = await fdfs.upload(ctx.file.buffer, {
            ext: ctx.file.mimetype.substring(6)
        })
        let avatar = fdfsServer.accessAddress + fileId
        let [rows] = await ctx.state.$mysql.execute(`update mt_users set avatar="${avatar}" where id=${user}`)
        if (rows.affectedRows === 1) {
            return ctx.body = {
                code: 1,
                avatar
            }
        }
        else {
            return ctx.body = {
                code: 0,
                msg: "更改头像失败"
            }
        }
    } catch (e) {
        console.log("err:", e)
        return ctx.body = {
            code: 0,
            msg: "文件上传失败" + e
        }
    }
})

module.exports = upload_router