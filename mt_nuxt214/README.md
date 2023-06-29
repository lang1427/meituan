<img src="./assets/images/logo.png">

<br/>
<img src="https://www.nuxtjs.cn/NUXTJS-logo-800.png" width="195">


这是一个使用`NuxtJS2.15.8`框架搭建的**PC端** 美团项目；后端使用`koa`实现


<details>

<summary>nuxt 前期学习笔记</summary>

<br />

<a href="https://www.nuxtjs.cn/api" target="_blank">nuxt2.14.5中文文档</a>

[Nuxt2 官方英文文档](https://v2.nuxt.com/docs/get-started/installation)

- vue2
- vue router
- vuex (included only when using the store option)
- vue server renderer (excluded when using mode:'spa')
- vue-meta

### 工作流 （生命周期）

incoming request --> nuxtServerInit (Store action) --> middleware (1.nuxt.config.js;2.matching layout;3.matching page & children) --> validate() pages & children --> asyncData() & fetch() --> Render --> middleware

Nuxt with Koa
`vue init nuxt-community/koa-template <project_name>`

```
├─ assets // 静态资源文件目录
├─ backpack.config.js
├─ build // 编译打包文件
├─ components // 组件
├─ layouts // 布局文件 (页面结构复用)
├─ node_modules
├─ nuxt.config.js // nuxt 配置文件
├─ package-lock.json
├─ package.json
├─ pages // 页面 (默认创建路由)
├─ server // koa 相关
├─ static // 静态文件
├─ store // vuex 相关

```

创建即配置

#### 路由

1. pages/ **页面组件**目录下的 vue 文件名称 对应的就是 路由

#### 页面模板

2. layouts/ **模板组件** 目录下 vue 文件 即公共布局组件，可配置 pages/对应的路由中
   - `default.vue` 默认的公共模板组件，无须配置即存在
   - `layout`参数 声明对应的页面 模板布局组件
     ```js
     export default {
       layout: 'search', // 指定该布局模板为 pages/search.vue 所用；没配置则使用default.vue
     };
     ```
     - 模板组件需要`<nuxt />` 映射 对应的 pages/中的 vue 文件
3. components/ **普通组件**目录下 vue 文件 即普通组件，与非 SSR 无差别

`<nuxt/>` ==> `<router-view />`
`<nuxt-link/>` ==> `<router-link/>`

`nuxt.config.js` 全局配置文件 https://nuxtjs.org/docs/get-started/installation

#### 异步数据 & SSR 解析

_SSR 中 mounted 生命周期函数不会被执行即查看源码不会有新内容存在(虽然界面上可以看到对应的功能，但是查看源码不会有对应的内容展示)，只在 CSR 中是可以的！_**mounted 生命周期不能用于 SSR，但是仍然可以 CSR**

1. 使用 `asyncData()` 函数请求异步数据（用来处理组件中的数据）

   ```js
   export default {
     data() {
       return {
         list: [],
       };
     },
     async asyncData() {
       let {
         status,
         data: { list },
       } = await axios.get('http://127.0.0.1:3000/city/list'); // axios需要指定ip&port;否则默认请求80端口
       if (status === 200) {
         // 没有this， 返回对应的data()函数数据
         return {
           list,
         };
       }
     },
   };
   ```

2. SSR 解析：将数据通过 script 标签插入
   `<script type="text/javascript">window.__NUXT__={"layout":"","data":[],"error":null,"serverRendered":true};</script>`

#### vuex 数据交换 使用`fetch()` 方法

#### 首屏渲染数据(新开窗口与刷新)会调用`nuxtServerInit`方法，但是this.$router.push()跳转路由时是不会调用此方法的！

</details>

# 运行项目起步

## 开发环境依赖

> npx create-nuxt-app@2.14.0 mt_nuxt214

- node v12.22.1
- nuxt v2.15.8

## 配置项目环境

1. *mt_nuxt214/server*目录下创建*conf.js*文件
   ```js
   // conf.js
   module.exports = {
      MySQL: {
         host: "127.0.0.1",  // mysql 主机
         port: 3360, // mysql 端口
         database: "", // mysql连接的数据库
         user: "root", // mysql 用户名
         pwd: "" // mysql 密码
      },
      Redis:{
         host:"127.0.0.1", // redis 主机
         port:6379  // redis 端口
      },
      SMTP:{
         host:"smtp.qq.com", // 电子邮箱主机
         port:587, // 电子邮箱端口
         user:"", // 发件人邮箱
         pwd:"" // 发件人授权码
      },
      aMapWebApiKEY:"",    // 高德地图Web服务key
      tokenApi:["/upload/change/avatar","/user/change/username","/user/change/birthday","/user/change/password"],
      fdfsServer: {
         host: "",
         port: ,
         accessAddress:""
      }
   }
   ```

# 创建此项目时的命令

1. `npm i npx -g`
2. `npx create-nuxt-app <project-name>`
   - Project name (项目名称)
   - Project desciption (项目描述)
   - Use a custom server framework (服务端框架) `koa`
   - Use a custom UI framework (UI 框架) `element-ui`
   - Choose rendering mode (选择渲染模式) `Universal` ==> SSR
   - Use axios module (启用 axios 模板)
   - Use eslint (启用 eslint)
   - Author name (作者名称)
   - Choose a package manager (选择包管理工具) `npm`

# 创建开发时遇到的问题记录

1. `Cannot find module 'node:fs'` node:v12.22.1

   - win7 系统已经不能升级到支持`node:`(内置模块命名空间)，所以只能对这里的 node_modules 目录下的依赖去掉`node:`,采用的方式是降低依赖包的版本`npm i nuxt@2.15.8 -S`

