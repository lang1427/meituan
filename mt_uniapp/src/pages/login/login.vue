<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>

    <view class="wrapper">
      <view :class="['email-num-wrapper',focus_val == 'email' ? 'active' : '']">
        <input class="email-num-input" v-model="email" type="email" placeholder="请输入邮箱/手机号" autocomplete="off" @focus="InputFocus('email')" @blur="focus_val=''"/>
        <text class="iconfont clear-input" @click="email=''" v-show="!!email">&#xe60e;</text>
      </view>
      <view :class="['verify-code-wrapper',focus_val == 'pwd' ? 'active' : '']">
        <input class="pwd-num-input" v-model="pwd" placeholder="请输入密码" :password="showPassword" maxlength="32" @focus="InputFocus('pwd')" @blur="focus_val=''"/>
        <text class="iconfont clear-input" @click="pwd=''" v-show="!!pwd">&#xe60e;</text>
        <text class="iconfont show-pw" @click="changePassword">&#xe660;</text>
        <navigator class="retrievepassword" hover-class="none" url="/pages/useraccount/retrievepassword">忘记密码</navigator>
      </view>
      <text class="account-tip" v-show="!!accountTip">{{ accountTip }}</text>
      <button class="login-btn" hover-class="none" type="default" :disabled="!email || !pwd" @click="login">登录</button>
	  <text class="signup-tip">未注册的邮箱/手机号验证后自动创建美团账户</text>
      <view class="user-confirm">
        <text class="confirm-tip" :style="confirmTipStyle">请先阅读并勾选用户协议</text>
        <view class="confirm-wrapper">
		  <checkbox-group @change="handleCheckboxChange">
          	<label><checkbox style="transform:scale(0.7);" value="license" activeBackgroundColor="#ffd100" color="#ccc" /></label>
		  </checkbox-group>
          <view class="confirm-text">
            <text>我已阅读并同意</text>
			<text @click="gotoView('https://rules-center.meituan.com/m/detail/4')" style="color: #3488ff" >《美团用户协议》、</text>
			<text @click="gotoView('https://rules-center.meituan.com/m/detail/2')" style="color: #3488ff" >《隐私政策》</text>
			<text>并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      accountTip: "", // 邮箱或密码错误，请重新输入
      showPassword: true,
	  readLic: false,
	  checkLic:false,
	  focus_val: "",
	  email: "",
	  pwd: ""
    };
  },
  computed:{
	confirmTipStyle(){
		if(this.readLic == false){
			return "visibility: hidden;"
		}else{
			return "visibility: visible;"
		}
	}
  },
  methods: {
    changePassword: function () {
      this.showPassword = !this.showPassword;
    },
	InputFocus(val){
		this.focus_val = val
	},
	gotoView(url){
		uni.navigateTo({
			url: '/pages/common/webview?url=' + url
		})
	},
	handleCheckboxChange(event){
		if(event.mp.detail.value.indexOf('license') != -1){
			this.checkLic = true
			this.readLic = false
		}else{
			this.checkLic = false
		}
	},
	login(){
		if(!this.checkLic){
			this.readLic = true
			return false
		}
		const requestTask = uni.request({
			url: 'http://localhost:3000/user/m_signin',
			method:"POST",
			data: {
				user: this.email,
				password: this.pwd
			},
			success: function(res) {
				
			}
		});
	}
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	.logo {
		height: 160rpx;
		width: 160rpx;
		margin: 50rpx auto;
	}
	.wrapper{
		margin: 30rpx 65rpx;
		.email-num-wrapper,.verify-code-wrapper{
			display: flex;
			height: 70rpx;
			box-sizing: border-box;
			align-items: center;
			border-bottom: 1rpx solid #E5E5E5;
			.email-num-input,.pwd-num-input{	
				flex: 1;			
			}
			.clear-input{
				padding: 30rpx;
			}
			&.active{
				border-color: $theme-color;
			}
		}
		.verify-code-wrapper{
			margin-top: 50rpx;
			.show-pw{
				padding: 15rpx 20rpx;
			}
		}
		.retrievepassword{
			font-size: 24rpx;
			color: #666;
			padding-left: 20rpx;
			border-left: 2rpx solid #d8d8d8;
		}
		.account-tip{
			margin-top: 10rpx;
			font-size: 24rpx;
			color: $uni-color-error;
		}
		.login-btn{
			margin-top: 80rpx;
		}
		.signup-tip{
			margin-top:24rpx;
			font-size:24rpx;
			color: rgba(0,0,0,0.50);
			display: inline-block;
			width: 100%;
			text-align: center;
		}
		.user-confirm{
			.confirm-tip{
				display: inline-block;
				width: 50%;
				height: 60rpx;
				line-height: 2.3em;
				// visibility: hidden;
				text-align: center;
				color: #fff;
				border-radius: 0.3em;
				background-color: #222;
				font-size: .8em;
				font-weight: 400;
				position: relative;
				opacity: .7;
				left: -0.9em;
				top: -0.8em;
				&:after {
					position: absolute;
					content: "";
					left: 10%;
					top: 36rpx;
					width: 0;
					height: 0;
					-webkit-transform: rotate(135deg);
					transform: rotate(135deg);
					border-top: 1.2em solid #222;
					border-left: 1em solid transparent;
				}
			}
			.confirm-wrapper{
				display: flex;
				.confirm-text{
					flex:1;
					font-size: 26rpx;
					color: rgba($color: #000000, $alpha: 0.5);
					uni-navigator{
						display: inline;
					}
				}
			}
		}
	}
}
</style>