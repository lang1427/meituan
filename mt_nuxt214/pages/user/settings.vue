<template>
    <div class="page index">
        <div class="setting-container">
            <div class="clearfix">
                <user_menu />
                <div class="setting-content">
                    <div class="head">
                        <p class="title">个人信息</p>
                        <p class="des">账户设置</p>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name"><span>头像</span></div>
                        <div class="field-value"><img :src="$store.state.user.userInfo.avatar" alt="" class="head-img">
                        </div>
                        <div class="upload-container">
                            <div class="btn-upload">
                                <button class="btn-change" @click="fadeToogle('show_avatar', true)">修改</button>
                                <div :class="['dialog-container', show_avatar ? 'fadeIn' : 'fadeOut']">
                                    <div class="dialog-box w630">
                                        <div class="dialog-head clearfix">
                                            <p class="dialog-name">裁剪图片</p>
                                            <p class="dialog-close" @click="fadeToogle('show_avatar', false)"><img
                                                    src="~/assets/images/icon/close.png" alt=""></p>
                                        </div>
                                        <div class="dialog-body">
                                            <div class="clip-board-container clearfix">
                                                <cropper ref="cropperBox" @uploadSuccess="uploadSuccess"></cropper>
                                            </div>
                                        </div>
                                        <div class="btn-group">
                                            <button class="btn btn-ok" @click="changeAvatar">确认修改</button>
                                            <button class="btn btn-cancel"
                                                @click="fadeToogle('show_avatar', false)">取消</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name"><span>昵称</span></div>
                        <div class="field-value"><span class="value">{{ $store.state.user.userInfo.username }}</span></div>
                        <button class="btn-change change-nickname" @click="fadeToogle('show_nikename', true)">修改</button>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name"><span>生日</span></div>
                        <div class="field-value"><span class="value">{{ $store.state.user.userInfo.birthday || "您还没有设置生日"
                        }}</span></div>
                        <button class="btn-change change-birthday" @click="fadeToogle('show_birthday', true)">修改</button>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name"><span>换绑手机</span></div>
                        <div class="field-value"><span class="value"></span></div>
                        <a class="btn-change" style="width:80px"
                            href="https://passport.meituan.com/account/mobilerebind">换绑</a>
                    </div>
                    <div class="item clearfix">
                        <div class="field-name"><span>登录密码</span></div>
                        <div class="field-value"><span class="value">安全强度：{{ grade }}</span></div>
                        <button class="btn-change change-pwd" @click="fadeToogle('show_pwd', true)">修改</button>
                    </div>
                </div>
                <div class="dialogs">
                    <div :class="['dialog-container', show_nikename ? 'fadeIn' : 'fadeOut']">
                        <div class="dialog-box">
                            <div class="dialog-head clearfix">
                                <p class="dialog-name">修改昵称</p>
                                <p class="dialog-close" @click="resetVal(); fadeToogle('show_nikename', false)">
                                    <img src="~/assets/images/icon/close.png" alt="">
                                </p>
                            </div>
                            <div class="dialog-body">
                                <div class="row"><label class="field-name">当前昵称</label><span class="field-value">{{
                                    $store.state.user.userInfo.username }}</span></div>
                                <div class="row"><label class="field-name">新昵称</label>
                                    <div
                                        :class="['field-input', nikename_status == 0 ? 'input-normal' : nikename_status == 1 ? 'input-error' : 'input-success']">
                                        <input type="text" v-model="new_nikename" @input=" validateName()">
                                        <img src="~/assets/images/icon/fail.png" class="icon icon-fail" alt="">
                                        <img src="~/assets/images/icon/success.png" class="icon icon-success" alt="">
                                        <p class="error-msg">{{ err_msg }}</p>
                                        <p class="tip-msg">以中文或英文字母开头，限4-16个字符，一个汉字为两个字符</p>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-group">
                                <button :class="['btn', 'btn-ok', nikename_status == 2 ? '' : 'btn-disabled']"
                                    @click="changeName">确认修改</button>
                                <button class="btn btn-cancel"
                                    @click=" resetVal(); fadeToogle('show_nikename', false)">取消</button>
                            </div>
                        </div>
                    </div>
                    <div :class="['dialog-container', show_birthday ? 'fadeIn' : 'fadeOut']">
                        <div class="dialog-box">
                            <div class="dialog-head clearfix">
                                <p class="dialog-name">修改生日</p>
                                <p class="dialog-close" @click=" fadeToogle('show_birthday', false)"><img
                                        src="~/assets/images/icon/close.png" alt=""></p>
                            </div>
                            <div class="dialog-body">
                                <div class="row">
                                    <label class="field-name" style="width:30%;transform:translateY(-3px)">生日</label>
                                    <el-date-picker value-format="yyyy-MM-dd" v-model="birthday" type="date"
                                        :picker-options="pickerOptions" placeholder="选择日期"></el-date-picker>
                                </div>
                            </div>
                            <div class="btn-group">
                                <button :class="['btn', 'btn-ok', !birthday ? 'btn-disabled' : '']"
                                    @click="changeBirthday">确认修改</button>
                                <button class="btn btn-cancel" @click=" fadeToogle('show_birthday', false)">取消</button>
                            </div>
                        </div>
                    </div>
                    <div :class="['dialog-container', show_pwd ? 'fadeIn' : 'fadeOut']">
                        <div class="dialog-box">
                            <div class="dialog-head clearfix">
                                <p class="dialog-name">设置密码</p>
                                <p class="dialog-close" @click=" resetPwdBox(); fadeToogle('show_pwd', false)"><img
                                        src="~/assets/images/icon/close.png" alt=""></p>
                            </div>
                            <div class="dialog-body">
                                <div class="row"><label class="field-name">当前密码</label>
                                    <div
                                        :class="['field-input', cur_pwd_status.status == 0 ? 'input-normal' : cur_pwd_status.status == 1 ? 'input-error' : 'input-success']">
                                        <input type="password" v-model="pwd_validate.cur_pwd">
                                        <img src="~/assets/images/icon/fail.png" class="icon icon-fail" alt=""><img
                                            src="~/assets/images/icon/success.png" class="icon icon-success" alt="">
                                        <p class="error-msg">{{ cur_pwd_status.val }}</p>
                                    </div>
                                </div>
                                <div class="row clearfix"><label class="field-name">密码</label>
                                    <div
                                        :class="['field-input', new_pwd_status.status == 0 ? 'input-normal' : new_pwd_status.status == 1 ? 'input-error' : 'input-success']">
                                        <input type="password" v-model="pwd_validate.new_pwd">
                                        <img src="~/assets/images/icon/fail.png" class="icon icon-fail" alt=""><img
                                            src="~/assets/images/icon/success.png" class="icon icon-success" alt="">
                                    </div>
                                    <div class="pwd-level clearfix">
                                        <div :class="[level == 1 ? 'level level-0' : 'level']">弱</div>
                                        <div :class="[level == 2 ? 'level level-1' : 'level']">中</div>
                                        <div :class="[level > 2 ? 'level level-2' : 'level']">强</div>
                                    </div>
                                    <div :class="['field-input', new_pwd_status.status == 0 ? 'input-normal' : new_pwd_status.status == 1 ? 'input-error' : 'input-success']"
                                        style="float:right;margin-right:106px">
                                        <p class="error-msg">{{ new_pwd_status.val }}</p>
                                    </div>
                                </div>
                                <div class="row"><label class="field-name">确认密码</label>
                                    <div
                                        :class="['field-input', confirm_pwd_status.status == 0 ? 'input-normal' : confirm_pwd_status.status == 1 ? 'input-error' : 'input-success']">
                                        <input type="password" v-model="pwd_validate.confirm_pwd">
                                        <img src="~/assets/images/icon/fail.png" class="icon icon-fail" alt=""><img
                                            src="~/assets/images/icon/success.png" class="icon icon-success" alt="">
                                        <p class="error-msg">{{ confirm_pwd_status.val }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="btn-group">
                                <button
                                    :class="['btn', 'btn-ok', (cur_pwd_status.status == 2 && new_pwd_status.status == 2 && confirm_pwd_status.status == 2) ? '' : 'btn-disabled']"
                                    @click="changePwd">确认修改</button>
                                <button class="btn btn-cancel"
                                    @click=" resetPwdBox(); fadeToogle('show_pwd', false)">取消</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import user_menu from "~/components/user_menu.vue"
import cropper from '~/components/cropper.vue'
import signMixin from '~/mixin/sign.js'
import { checkPwd } from "methods-util"
export default {
    middleware: 'authenticated',
    components: {
        user_menu,
        cropper
    },
    data() {
        return {
            birthday: this.$store.state.user.userInfo.birthday,
            show_avatar: false,
            show_nikename: false,
            show_birthday: false,
            show_pwd: false,
            new_nikename: "",
            err_msg: "",
            nikename_status: 0, // 0 未输入状态  1输入错误状态  2输入正确状态
            pwd_validate: {
                cur_pwd: null,
                new_pwd: null,
                confirm_pwd: null
            },
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now()
                }
            }
        }
    },
    mixins: [signMixin],
    computed: {
        nikename_bytelen() {
            return this.new_nikename.replace(/[^x00-xFF]/g, '**').length // 求字节长度
        },
        cur_pwd_status() {
            // 初始值pwd_validate.cur_pwd=null 默认未被输入的情况0， 通过严格等于进行验证输入了值并清空后为""1 ，否则就是有值的此时状态为成功2
            if (this.pwd_validate.cur_pwd === null) {
                return {
                    status: 0,
                    val: ""
                }
            } else if (this.pwd_validate.cur_pwd === "") {
                return {
                    status: 1,
                    val: "请输入当前密码"
                }
            } else {
                return {
                    status: 2,
                    val: ""
                }
            }
        },
        new_pwd_status() {
            if (this.pwd_validate.new_pwd === null) {
                return {
                    status: 0,
                    val: ""
                }
            } else if (this.pwd_validate.new_pwd === "") {
                return {
                    status: 1,
                    val: "请输入新密码"
                }
            } else if (this.pwd_validate.new_pwd.length > 32 || this.pwd_validate.new_pwd.length < 8 || checkPwd(this.pwd_validate.new_pwd) < 2) {
                return {
                    status: 1,
                    val: "密码要求8位~32位，包含大小写字母、数字、特殊字符中的两种或以上"
                }
            } else {
                return {
                    status: 2,
                    val: ""
                }
            }
        },
        confirm_pwd_status() {
            if (!!this.pwd_validate.confirm_pwd && this.pwd_validate.confirm_pwd == this.pwd_validate.new_pwd) {
                return {
                    status: 2,
                    val: ""
                }
            } else if (this.pwd_validate.confirm_pwd?.length === this.pwd_validate.new_pwd?.length && this.pwd_validate.confirm_pwd != this.pwd_validate.new_pwd) {
                return {
                    status: 1,
                    val: "密码不一致，请重新输入"
                }
            } else {
                return {
                    status: 0,
                    val: ""
                }
            }
        },
        grade() {
            let grade = this.$store.state.user.userInfo.grade
            if (grade >= 3) {
                return "强"
            } else if (grade == 2) {
                return "中"
            } else {
                return "弱"
            }
        },
        level() {
            if (!!this.pwd_validate.new_pwd) {
                return checkPwd(this.pwd_validate.new_pwd)
            }
            return 0
        }
    },
    methods: {
        fadeToogle(show_val, show_bool) {
            this[show_val] = show_bool
        },
        resetVal() {
            this.new_nikename = ""
            this.err_msg = ""
            this.nikename_status = 0
        },
        resetPwdBox() {
            this.pwd_validate.cur_pwd = null
            this.pwd_validate.new_pwd = null
            this.pwd_validate.confirm_pwd = null
        },
        debounce(fn, delay = 1e3) {
            if (this.timer) clearTimeout(this.timer);
            this.timer = window.setTimeout(() => {
                fn.call(this);
            }, delay);
        },
        validateName() {
            this.debounce(() => {
                this.nikename_status = 1
                if (!/^[a-zA-Z\u4e00-\u9fa5]/.test(this.new_nikename)) {
                    this.err_msg = "以中文或英文字母开头"
                } else if (this.nikename_bytelen > 16 || this.nikename_bytelen < 4) {
                    this.err_msg = "限4-16个字符，一个汉字为两个字符"
                } else {
                    this.err_msg = ""
                    this.nikename_status = 2
                }
            })
        },
        changeAvatar() {
            this.$refs.cropperBox.Upload()
        },
        uploadSuccess() {
            this.$message({ type: "success", message: "头像修改成功" })
            this.fadeToogle('show_avatar', false)
        },
        async changeName() {
            if (this.nikename_status === 2) {
                let res = await this.$axios.post('/user/change/username', { username: this.new_nikename })
                if (res.data.code === 1) {
                    this.$message.success("修改成功")
                    this.$store.dispatch("user/setUserInfo", { username: this.new_nikename })
                    this.resetVal()
                    this.fadeToogle('show_nikename', false)
                } else {
                    this.$message.error(res.data.msg)
                }
            }
        },
        async changeBirthday() {
            if (!!this.birthday) {
                let res = await this.$axios.post('/user/change/birthday', { birthday: this.birthday })
                if (res.data.code === 1) {
                    this.$message.success("修改成功")
                    this.$store.dispatch("user/setUserInfo", { birthday: this.birthday })
                    this.fadeToogle('show_birthday', false)
                } else {
                    this.$message.error(res.data.msg)
                }
            }
        },
        async changePwd() {
            if (this.cur_pwd_status.status == 2 && this.new_pwd_status.status == 2 && this.confirm_pwd_status.status == 2) {
                let res = await this.$axios.post("/user/change/password", {
                    password: this.AES_encrypt(this.pwd_validate.cur_pwd),
                    new_password: this.AES_encrypt(this.pwd_validate.new_pwd),
                    confirm_password: this.AES_encrypt(this.pwd_validate.confirm_pwd),
                    grade: checkPwd(this.pwd_validate.new_pwd)
                })
                if (res.data.code === 1) {
                    this.$message.success("密码修改成功")
                    this.$store.dispatch("user/delUserInfo")
                    this.$router.push('/user/login')
                } else {
                    this.$message.error(res.data.msg)
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
.page {
    .setting-container {
        margin: 20px auto;
        width: 1190px;

        .setting-content {
            border: 1px solid #E5E5E5;
            border-radius: 4px;
            min-height: 200px;
            width: 888px;
            float: right;
            background: #fff;
            padding: 30px;
            padding-bottom: 0;

            .head {
                .title {
                    font-size: 20px;
                    color: #333333;
                    line-height: 26px;
                    font-weight: 500;
                }

                .des {
                    font-size: 14px;
                    color: #666666;
                    line-height: 40px;
                    margin-bottom: 20px;
                }

            }

            .item {
                border-top: 1px solid #E5E5E5;
                padding: 30px 0;

                .field-name {
                    width: 95px;
                    border-right: 1px solid #e5e5e5;
                    text-align: right;
                    padding-right: 30px;
                    float: left;
                    box-sizing: content-box;

                    span {
                        font-size: 18px;
                        color: #333333;
                        line-height: 34px;
                    }

                }

                .field-value {
                    float: left;
                    text-align: right;
                    padding-left: 30px;
                    height: 40px;

                    .head-img {
                        width: 48px;
                        height: 48px;
                        border-radius: 48px;
                        transform: translateY(-5px);
                    }

                    .value {
                        font-size: 12px;
                        color: #666666;
                        line-height: 40px;
                    }

                }

                .btn-change {
                    background: #FFFFFF;
                    border: 1px solid #E5E5E5;
                    border-radius: 100px;
                    font-size: 14px;
                    color: #666666;
                    float: right;
                    height: 40px;
                    width: 82px;
                    cursor: pointer;
                    margin: 0 15px;
                    line-height: 40px;
                    text-align: center;
                }

                .link {
                    font-size: 14px;
                    color: #31BBAC;
                    float: right;
                    line-height: 40px;
                }
            }

        }

        .dialog-container {
            position: fixed;
            z-index: 1001;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.80);
            top: 0;
            left: 0;

            .dialog-box {
                background: #FFFFFF;
                border-radius: 10px;
                width: 480px;
                margin: 0 auto;
                position: relative;
                top: 18%;

                &.w630 {
                    width: 630px;
                }

                .dialog-head {
                    width: 100%;
                    background-color: #f7f7f7;
                    border-radius: 10px;
                    height: 50px;

                    .dialog-name {
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 50px;
                        padding-left: 20px;
                        color: #333333;
                        float: left;
                    }

                    .dialog-close {
                        font-size: 14px;
                        padding-right: 20px;
                        color: #333333;
                        float: right;
                        margin: 12px auto;
                        cursor: pointer;

                        img {
                            width: 24px;
                            height: 24px;
                        }

                    }

                }

            }

            .text {
                text-align: center;
                padding: 25px 0 0 0;
                height: 65px;
                line-height: 34px;
            }

            .title {
                font-size: 20px;
                color: #222222;
                text-align: center;
                font-weight: 500;
                margin-bottom: 13px;
            }

            .title2 {
                font-size: 14px;
                color: #222222;
                text-align: center;
            }

            .dialog-body {
                margin: 20px auto;
                min-height: 10px;
            }

            .btn-group {
                text-align: center;
                padding: 0px 0 25px 0;

                .btn {
                    height: 40px;
                    width: 120px;
                    border-radius: 100px;
                    color: #FFF;
                    border: 0;
                    font-size: 14px;
                    color: #FFFFFF;
                    cursor: pointer;
                    font-weight: 500;
                }

                .btn-ok {
                    color: #222222;
                    background-image: linear-gradient(135deg, #FFD000 0%, #FFBD00 100%);
                    margin-right: 10px;
                }

                .btn-cancel {
                    background: rgba(246, 247, 249, 0.8);
                    color: #222222;
                    margin-left: 10px;
                }

                .btn-disabled {
                    color: rgba(34, 34, 34, 0.5);
                    background-image: linear-gradient(135deg, #FFF5CA 0%, #FFF2CC 100%);
                }

            }

            .row {
                margin: 15px auto;

                .field-name {
                    width: 36%;
                    text-align: right;
                    font-size: 14px;
                    color: #666666;
                    line-height: 40px;
                    display: block;
                    float: left;
                    margin-right: 20px;
                }

                .field-value {
                    font-size: 14px;
                    color: #666666;
                    line-height: 40px;
                    font-weight: 500;
                }

                .field-input {
                    display: inline-block;
                    position: relative;
                    width: 180px;

                    input {
                        width: 148px;
                        padding: 0 20px 0 10px;
                        font-size: 14px;
                        color: #333333;
                        border: 1px solid #E5E5E5;
                        height: 32px;
                        border-radius: 2px;
                    }

                    .icon {
                        display: none;
                        position: absolute;
                        top: 9px;
                        right: 5px;
                        height: 16px;
                        width: 16px;
                    }

                }

                .input-normal {
                    input:focus {
                        border: 1px solid #FFC300;
                        box-shadow: 0 0 1px 1px rgba(255, 195, 0, 0.30);
                    }

                    .tip-msg {
                        display: block;
                    }

                }

                .input-error {
                    input {
                        border: 1px solid #FF6677;
                        box-shadow: 0 0 1px 1px rgba(225, 102, 119, 0.30);
                    }

                    .icon-fail {
                        display: block;
                    }

                    .error-msg {
                        display: block;
                    }

                }

                .input-success {
                    input:focus {
                        border: 1px solid #FFC300;
                        box-shadow: 0 0 1px 1px rgba(255, 195, 0, 0.30);
                    }

                    .icon-success {
                        display: block;
                    }

                }

                .error-msg {
                    display: none;
                    font-size: 12px;
                    color: #FF6677;
                    line-height: 1.2;
                    margin: 10px 0;
                }

                .tip-msg {
                    display: none;
                    font-size: 12px;
                    color: #999;
                    line-height: 1.2;
                    margin: 10px 0;
                }

            }
        }

        .upload-container {
            .clip-board {
                margin: 10px 10px 10px 25px;
                width: 400px;
                height: 400px;
                position: relative;
                float: left;
                border: 1px solid #a3a3a3;

                .btn-ok {
                    height: 40px;
                    width: 120px;
                    border-radius: 100px;
                    color: #FFF;
                    border: 0;
                    font-size: 14px;
                    cursor: pointer;
                    font-weight: 500;
                    background: #13D1BE;
                    margin-right: 10px;
                }
            }
        }
    }
}

.pwd-level {
    .level {
        float: left;
        background: #E5E5E5;
        height: 16px;
        width: 58px;
        color: #fff;
        text-align: center;
        font-size: 12px;
        margin-top: 5px;
        border: 1px solid #fff;
        transform: translateX(1px);
    }

    .level-0 {
        background: #FFAAAA;
    }

    .level-1 {
        background: #FFDAAA;
    }

    .level-2 {
        background: #8EE6DD;
    }
}
</style>