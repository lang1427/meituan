const nodemailer = require("nodemailer")
const { SMTP } = require('./conf')
const crypto = require('crypto')
const algorithm = "aes-256-cbc"  // 加密算法
const key = crypto.randomBytes(32)  // 加密key
const iv = crypto.randomBytes(16)  // 加密偏移量

module.exports = {
    SmtpServer: async (rec_email, text) => {
        // 创建一个运输对象
        let transporter = nodemailer.createTransport({
            host: SMTP.host,
            port: SMTP.port,
            secure: false,
            auth: {
                user: SMTP.user,   // 发送者邮箱
                pass: SMTP.pwd                     // 授权码(通过QQ获取)
            }
        })

        // 发送邮件
        await transporter.sendMail({
            from: `<${SMTP.user}>`,  // 发件人邮件地址
            to: `<${rec_email}>`,     // 收件人邮件地址，多个可用逗号(,)隔开    
            // cc: ,                     抄送人邮件地址
            subject: '激活用户',       //  邮件主题
            html: text,         // 正文 （普通文本格式）
            // html:"<h1>...</h1>"     正文 （html格式）
        })

    },
    aesEncode: (str) => {
        // 创建加密对象 
        const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv)
        let encrypted = cipher.update(str)
        // Using concatenation 
        encrypted = Buffer.concat([encrypted, cipher.final()])
        return {
            iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex')
        }
    },
    aesDecode: (str) => {
        const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv)
        let encryptedText = Buffer.from(str, 'hex')
        let decrypted = decipher.update(encryptedText)
        decrypted = Buffer.concat([decrypted, decipher.final()])
        return decrypted.toString()
    }
}


