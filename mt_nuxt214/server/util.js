const fs = require("fs")
const path = require("path")
const nodemailer = require("nodemailer")
const { SMTP } = require('./conf')

const crypto = require('crypto')
const algorithm = "aes-256-cbc"  // 加密算法
const key = crypto.randomBytes(32)  // 加密key
const iv = crypto.randomBytes(16)  // 加密偏移量

const JWT = require("jsonwebtoken")
const tokenTime = 1000 * 60 * 20;// token时效 20分钟
const SecretKey = fs.readFileSync(path.join(__dirname, "./rsa_private_key.pem"), 'utf-8')


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
    },
    setToken: (data) => {
        return JWT.sign({ user: data.user }, SecretKey, {
            expiresIn: tokenTime
        });
    },
    checkToken: (data) => {
        var user = null;
        try {
            //如果根据token查到了用户信息，表示校验通过
            var decoded = JWT.verify(data.token, SecretKey);
            user = decoded.user;
        } catch (e) {

        }
        return user
    },
    delToken: (data) => {
        JWT.sign({ user: data.user }, SecretKey, {
            expiresIn: 0
        });
    },
    getPosiRange: (longitude, latitude, distince) => {
        /**
           * 附近位置最大最小经纬度计算 
           * @param   longitude  经度
           * @param   latitude   纬度
           * @param   distince    距离（千米）
           * @returns 格式：经度最小值-经度最大值-纬度最小值-纬度最大值
           */
        let r = 6371.393;    // 地球半径千米
        let lng = longitude;
        let lat = latitude;
        let dlng = 2 * Math.asin(Math.sin(distince / (2 * r)) / Math.cos(lat * Math.PI / 180));
        dlng = dlng * 180 / Math.PI;// 角度转为弧度
        let dlat = distince / r;
        dlat = dlat * 180 / Math.PI;
        let minlat = (lat - dlat).toFixed(6);
        let maxlat = (lat + dlat).toFixed(6);
        let minlng = (lng - dlng).toFixed(6);
        let maxlng = (lng + dlng).toFixed(6);
        return { minlng, maxlng, minlat, maxlat };
    }
}


