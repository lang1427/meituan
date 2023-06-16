<template>
    <div class="site-body-wrapper">
        <div class="site-body cf">
            <div class="register-section">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="ruleForm.email"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="register-btn" type="primary" @click="submitForm('ruleForm')">注册</el-button>
                    </el-form-item>
                    <el-form-item>
                        <p>已有账号？<nuxt-link to="/user/login">前往登录</nuxt-link></p>
                    </el-form-item>
                </el-form>

                <license :check.sync=check_license ref="license"></license>

            </div>
        </div>
    </div>
</template>
   
<script>
import { isEmail, checkPwd } from 'methods-util'
import signMixin from '~/mixin/sign.js'
import License from '~/components/read_license.vue';
export default {
    layout: "sign",
    components: {
        License
    },
    data() {
        var checkemail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('邮箱号不能为空'));
            }
            setTimeout(() => {
                if (!isEmail(value)) {
                    callback(new Error('请输入合法的邮箱号'));
                } else {
                    callback();
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: '',
                checkPass: '',
                email: ''
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                email: [
                    { validator: checkemail, trigger: 'blur' }
                ]
            },
            check_license: false
        };
    },
    mixins: [signMixin],
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if (this.$refs.license.validatorLicense()) {
                        this.$axios.post('/user/signup', { email: this.ruleForm.email, password: this.AES_encrypt(this.ruleForm.pass), readlic: 1, grade: checkPwd(this.ruleForm.pass) }).then(res => {
                            if (res.data.code === 1) {
                                this.$message({ type: 'success', message: "注册成功" })
                                this.$router.push('/user/login')
                            } else {
                                this.$message({ type: "error", message: res.data.msg })
                            }
                        }, err => {
                            this.$message({ type: "error", message: err })
                        })
                    }
                } else {
                    return false;
                }
            });
        }
    }
}
</script>
   
<style lang="less">
.site-body {
    margin: 0 auto 70px;
    width: 980px;

    .register-section {
        padding-top: 0;
        margin: 90px auto;
        width: 420px;
        background: #FFF;

        a {
            color: #FE8C00;
        }

        .register-btn {
            width: 318px;
        }

    }
}
</style>
   