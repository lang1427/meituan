<template>
  <view class="content">
    <view class="headline">
      <text class="headline-content">找回登录密码</text>
    </view>
    <view class="op-wrapper">
      <view :class="[current_step == 1 ? 'current' : '','step-op','step-1-op']">
        <text class="step-1-title">请填写你要找回密码的美团账号</text>
        <input type="text" class="user-input" v-model="email" placeholder="邮箱" />
        <button class="next-step-btn" hover-class="none" type="default" :disabled="!email" @click="next">下一步</button>
      </view>
      <view :class="[current_step == 2 ? 'current' : '','step-op','step-2-op']">
        <view class="container">
          <view class="wrapper">
            <template v-if="true">
              <image class="outter-img" src="/static/outter.png" alt="智能检测"></image>
              <image class="inner-img" src="/static/inner.png" alt="智能检测"></image>
            </template>
            <image v-else class="fail-img" src="/static/fail.png" alt="账号异常"></image>
          </view>
          <!-- 正在进行智能安全检测...
          正在检测账号状态 -->
          <view class="text-wrapper">当前账号行为异常，已被限制找回密码</view>
        </view>
      </view>
      <view :class="[current_step == 3 ? 'current' : '','step-op','step-3-op']">
        <text class="step3-title">
          请为你的账号{{ email }}设置一个新密码
        </text>
        <view class="password-input-wrapper">
          <input class="password-input" v-model="pwd" placeholder="请设置8-32位(数字+字母)" :password="showPassword" maxlength="32" />
          <text class="iconfont clear-input" @click="pwd=''" v-show="!!pwd">&#xe60e;</text>
          <text class="iconfont show-pw" @click="changePassword">&#xe660;</text>
        </view>
        <button class="save-newpw-btn" hover-class="none" type="default" :disabled="saveBtnStatus" @click="next">保存新密码</button>
      </view>
      <view :class="[current_step == 4 ? 'current' : '','step-op','step-4-op']">
        <h3 class="retrieve-tips">恭喜您已成功修改了登录密码</h3>
        <text class="retrieve-tips">您的登录密码已经重新设置，请妥善保管</text>
        <navigator class="login-btn" hover-class="none" url="/pages/login/login" >立即登录</navigator>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data(){
    return{
      email:"",
      pwd:"",
      showPassword:true,
      current_step:1
    }
  },
  computed:{
    saveBtnStatus(){
      if(this.pwd.length >=8 && this.pwd.length <= 32 && /(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+/.test(this.pwd)){
        return false
      }
      return true
    }
  },
  methods:{
    changePassword() {
      this.showPassword = !this.showPassword;
    },
    next(){
      this.current_step ++
      if(this.current_step == 2){
        setTimeout(()=>{
          this.next()
        },500)
      }else if(this.current_step == 3){

      }
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes rotate{
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.content{
  .headline{
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    background: $theme-color;
    .headline-content{
      font-size: $uni-font-size-title;
      color: $uni-color-title;
    }
  }
  .op-wrapper{
    width: 100%;
    height: 200rpx;
    .step-op{
      display: none;
      margin: 0 50rpx;
      &.current{
        display: block;
      }
      &.step-1-op{
        .step-1-title{
          display: inline-block;
          font-size: 40rpx;
          margin: 40rpx 0 0 0;
        }
        .user-input{
          border: none;
          border-bottom: 1rpx solid #d8d8d8;
          box-sizing: border-box;
          background-color: #fff;
          display: inline-block;
          width: 100%;
          height: 70rpx;
          font-size: 40rpx;
          margin: 40rpx 0 0 0;
        }
        .next-step-btn{
          height: 86rpx;
          line-height: 86rpx;
          border-radius: 20rpx;
          margin: 40rpx 0 0 0;
        }
      }
      &.step-2-op{
        .container{
          margin-top: 90rpx;
          .wrapper{    
            position: relative;
            height: 155rpx;
            .outter-img,.inner-img,.fail-img{
              position: absolute;
              margin: auto;
              left: 0;
              right: 0;
              top: 0;
              bottom: 0;
              width: 150rpx;
              height: 150rpx;
            }
            .outter-img{
              width: 255rpx;
              height: 255rpx;
              animation: rotate 1s linear 0s normal none infinite;
            }
          }
          .text-wrapper{
            text-align: center;
            padding-top: 100rpx;
            font-size: 40rpx;
          }
        }
      }
      &.step-3-op{
        margin-top: 90rpx;
        .step3-title{
          margin-bottom: 50rpx;
          font-size: 40rpx;
          display: block;
        }
        .password-input-wrapper{
          position: relative;
          margin-bottom: 30rpx;
          .password-input{
            border: none;
            border-bottom: 1rpx solid #d8d8d8;
            padding-right: 120rpx;
            box-sizing: border-box;
            background-color: #fff;
            display: inline-block;
            width: 100%;
            height: 70rpx;
            font-size: 40rpx;
          }
          .clear-input{
            position: absolute;
            right: 80rpx;
            bottom: 16rpx;
            padding: 5rpx 0;
            width: 30rpx;
            box-sizing: border-box;
            cursor: pointer;
          }
          .show-pw{
            position: absolute;
            right: 2rpx;
            bottom: 16rpx;
            padding: 7rpx 0;
            width: 40rpx;
            box-sizing: border-box;
            cursor: pointer;
          }
        }
        .save-newpw-btn{
          height: 86rpx;
          line-height: 86rpx;
          border-radius: 20rpx;
          margin: 40rpx 0 0 0;
        }
      }
      &.step-4-op{
        text-align: center;
        .retrieve-tips{
          font-size: 40rpx;
          margin-bottom: 35rpx;
          margin-top: 40rpx;
          display: block;
        }
        .login-btn{
          font-size: 36rpx;
          background: $theme-color;
          border-radius: 20rpx;
          border: 1rpx solid #FFBD00;
          text-align: center;
          color: $uni-color-title;
          height: 86rpx;
          line-height: 86rpx;
          width: 100%;
          display: inline-block;
          margin-top: 60rpx;
          text-decoration:none;
        }
      }
    }

  }
}
</style>