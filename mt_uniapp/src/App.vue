<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
@font-face {
  font-family: 'iconfont';  /* Project id 4420859 */
  src: url('//at.alicdn.com/t/c/font_4420859_jjzgf7dfwkm.woff2?t=1706081997640') format('woff2'),
       url('//at.alicdn.com/t/c/font_4420859_jjzgf7dfwkm.woff?t=1706081997640') format('woff'),
       url('//at.alicdn.com/t/c/font_4420859_jjzgf7dfwkm.ttf?t=1706081997640') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 28rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c5c6cb;
}

uni-checkbox .uni-checkbox-input{
    border-radius: 50%;	
}
</style>
