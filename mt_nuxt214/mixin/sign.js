import CryptoJS from 'crypto-js'
export default {
    data() {
        return {
            sign_key: "4567631346997846",
            sign_iv: "0000000000123456"
        }
    },
    methods: {
        ENC_parse(word) {
            return CryptoJS.enc.Utf8.parse(word)
        },
        AES_encrypt(password) {
            return CryptoJS.AES.encrypt(this.ENC_parse(password), this.ENC_parse(this.sign_key), {
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7,
                iv: this.ENC_parse(this.sign_iv)
            }).toString();
        }
    }
}