<template>
  <div class="site-body-wrapper">
    <div class="site-body cf">
      <div class="promotion-banner">
        <img src="~assets/images/www.jpg" width="480" height="370" alt="美团网">
      </div>

      <div class="login-section">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="50px">
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <a class="forget-password" href="">忘记密码？</a>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <p class="signup-guide">还没有账号？<nuxt-link to="/user/register">免费注册</nuxt-link></p>
          </el-form-item>
        </el-form>

        <license :check.sync=check_license ref="license"></license>

        <div class="oauth-wrapper">
          <h3 class="title-wrapper"><span class="title">用合作网站账号登录</span></h3>
          <div class="oauth cf">
            <span class="sp-normal oauth__link oauth__link--qq"></span>
            <span class="sp-normal oauth__link oauth__link--weibo"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { isEmail } from 'methods-util'
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
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        email: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: checkemail, trigger: 'blur' }
        ]
      },
      check_license: false
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$refs.license.validatorLicense()) {
            this.$axios.post('/user/signin', { email: this.ruleForm.email, password: this.ruleForm.pass, readlic: 1 }).then(res => {
              if (res.data.code === 1) {
                window.sessionStorage.setItem("token",res.data.token)
                this.$router.push('/user/info')
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

  .promotion-banner {
    float: left;
    height: 370px;
    margin: 0 115px 0 0;
    width: 480px;

    img {
      border: 0;
    }
  }

  .login-section {
    float: left;
    padding-top: 0;
    margin: 0 auto;
    width: 370px;
    background: #FFF;

    a {
      color: #FE8C00;
    }

    .login-btn {
      width: 318px;
    }

    .forget-password {
      float: right;
      margin-top: -11px;
      height: 32px;
    }

    .oauth-wrapper {
      margin-top: 25px;

      .title-wrapper {
        position: relative;
        margin-bottom: 30px;
        border-bottom: 1px solid #CCC;
        width: 100%;
        height: 0;
        overflow: visible;

        .title {
          position: absolute;
          top: -10px;
          left: 50%;
          margin-left: -75px;
          width: 150px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: #666;
          background: #FFF;
        }
      }

      .oauth {
        padding-left: 156px;
      }

      .oauth__link {
        width: 18px;
        height: 18px;
        float: left;
        margin-right: 20px;
        cursor: pointer;

        &.oauth__link--qq {
          background-position: -1250px -599px;

          &:hover {
            background-position-y: -617px;
          }
        }

        &.oauth__link--weibo {
          background-position: -1250px -635px;

          &:hover {
            background-position-y: -653px;
          }
        }
      }
    }

  }
}
</style>
 