# vue-ssr-meituan

<details>

<summary>nuxt 笔记</summary>

`npm i koa-generator -g`

`koa-generic-session`
`koa-redis`

`Nuxt.js`

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

</details>

### 前期准备

#### 环境准备

- node 8.12.0
- vue 2.5.17
- npm 6.4.1
- webpack 4.19.1
- nuxt 2.0.0
- mysql
- redis

#### 项目安装

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

### 配置文件改装

```js
// nuxt.config.js
export default {
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/main.css',
    '~assets/css/main.css',
  ],
};
```

### 数据结构设计

1. user 表
   - username
   - password
   - email
2. area 表
   - id
   - value
   - city
   - name
   - c_id
3. menu 表
   - name
   - type
   - title
4. city 表
   - id
   - value
   - province
   - name
   - id
5. pois 表
   - name
   - province
   - city
   - county
   - areaCode
   - tel
   - area
   - add
   - type
   - module
   - longtide _经纬度_ 地图服务 推荐景点相关
   - latitude _经纬度_

### 接口设计

1. 用户接口

   - `/users/signup` 注册
   - `/users/signin` 登录
   - `/users/verify` 验证码
   - `/users/exit` 登出
   - `/users/getUser` 用户信息

2. 城市定位服务

   - `/geo/getPosition` 根据签名 获取当前城市的名称和 ip
   - `/geo/province` 获取省份及城市
   - `/geo/province/:id` 根据 id 获取省份城市
   - `/geo/cidy` 获取所有城市
   - `/geo/hotCity` 获取热门城市
   - `/geo/menu` 获取菜单

3. 查询接口

   - `/search/top` 获取当前搜索前几名的数据
   - `/search/resultsBykeywords` 根据搜索关键字搜索
   - `/search/hotPlace` 获取热门的搜索数据
   - `/search/products` 查询产品列表
   - `/search/product/:id` 根据产品 id 查询产品列表

### koa 相关包

`nodemailer` 邮箱处理包
`koa-bodyparser`
`koa-json`
`koa-generic-session`
`koa-redis`
`koa-passport` & `passport-local` 登录策略包 使用用户名和密码进行登录登出功能

```js
app.keys = ['mt', 'keyskeys'];
app.proxy = true;
app.use(session({ key: 'mt', prefix: 'mt:uid', store: new Redis() })); // koa-generic-session koa-redis
app.use(
  bodyParser({
    // koa-bodyparser
    extendTypes: ['json', 'form', 'text'],
  })
);
app.use(json()); // koa-json
app.use(passport.initialize()); // koa-passport
app.use(passport.session());
```

对中文进行编码 : `encodeURIComponent(username)`

```js
// exit.vue
export default {
  // 使用中间件实现退出登录操作；因为退出登录没有dom操作，由<next-link to=exit />进行的
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('/users/exit');
    if (status === 200 && data && data.code == 0) {
      window.location.href = '/';
    }
  },
};
```

```js
// vuex 中请求数据
```

```js
// 组件中请求数据 async mounted  没有用到SSR
export default {
  async mounted() {},
};
```

### 接口签名

`axios.get("http://cp-tools.cn/geo/getPosition?sign=${sign}")`

[签名地址](http://cp-tools.cn/sign)

### 高德地图

44
