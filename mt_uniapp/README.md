# mt_uniapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### pages.json

// pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages

### nvue

1. nvue中不可直接使用 css 的方式引入字体文件，需要使用以下方式在 js 内引入。nvue 内不支持本地路径引入字体，请使用网络链接或者base64形式。src字段的url的括号内一定要使用单引号

```javascript
var domModule = uni.requireNativePlugin('dom')
domModule.addRule('iconfont', {
	fontFamily: 'fontFamilyName',
	src: "url('https://at.alicdn.com/t/c/font_4420859_8f6w55mv6si.woff2?t=1705996344340')",
});
```



- style lang="scss"  `Error: Cannot find module 'node-sass'`  
	- node 版本v12.16.1 安装node-sass小于8的版本
	- npm i node-scss@7 -D 
	- Cannot download "https://github.com/sass/node-sass/releases/download/v9.0.0/win32-x64-72_binding.node": 执行下面的方式
	- `npm i node-sass@4.14.1 --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ -D`

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
