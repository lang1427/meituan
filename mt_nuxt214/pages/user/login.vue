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
            <p class="signup-guide">还没有账号？<a href="">免费注册</a></p>
          </el-form-item>
        </el-form>

        <div class="user-agreement-wrap">
          <div class="wrap-tip" ref="agreementTip">请先阅读并勾选用户协议</div>
          <div class="wrap-text">
            <el-checkbox v-model="check_license"></el-checkbox>
            我已阅读并同意<a href="https://rules-center.meituan.com/rules-detail/4" class="j-terms" id="meituanTos"
              target="_blank">《美团用户协议》</a>
            <a href="https://rules-center.meituan.com/rules-detail/2" class="j-terms" id="meituanTos"
              target="_blank">《隐私政策》</a>
            <br />并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
          </div>
        </div>
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
export default {
  layout: "sign",
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
          if (!this.check_license) {
            this.$refs.agreementTip.style = "visibility: visible;"
            setTimeout(() => {
              this.$refs.agreementTip.style = "visibility: hiddent;"
            }, 3000)
          } else {
            alert("登录")
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

    .user-agreement-wrap {

      .wrap-tip {
        width: 140px;
        height: 26px;
        line-height: 25px;
        visibility: hidden;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background-color: #222;
        font-weight: 400;
        position: relative;
        opacity: .7;
        left: 9.5px;
        top: -5px;
        font-size: 12px;

        &::after {
          content: '';
          position: absolute;
          top: 13px;
          left: 10px;
          width: 0;
          height: 0;
          transform: rotate(135deg);
          border-top: 14px solid #222;
          border-left: 14px solid transparent;
        }
      }

      .wrap-text {
        margin-left: 20px;
      }
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
          &:hover{
            background-position-y: -617px;
          }
        }

        &.oauth__link--weibo {
          background-position: -1250px -635px;
          &:hover{
            background-position-y: -653px;
          }
        }
      }
    }

  }
}
</style>
 