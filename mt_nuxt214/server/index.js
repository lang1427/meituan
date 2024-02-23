const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const cors = require('@koa/cors');

const mysql = require("mysql2/promise")
const CONF = require('./conf')

const app = new Koa()
app.use(cors());

app.use(async (ctx, next) => {

  // 配置数据库
  ctx.state.$mysql = await mysql.createPool({
    host: CONF.MySQL.host,
    port: CONF.MySQL.port,
    user: CONF.MySQL.user,
    password: CONF.MySQL.pwd,
    database: CONF.MySQL.database,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })

  await next()
})

/** 配置redis */
app.keys = ['mt', parseInt(Math.random() * 1e6).toString()];
app.use(session({
  key: 'mt',
  prefix: 'mt:uid',
  ttl: () => {
    return 1000 * 60 * 25; // session25分钟
  },
  rolling: true, // 自动续期
  store: new redisStore({
    host: CONF.Redis.host,
    port: CONF.Redis.port
  })
}))

app.use(async (ctx, next) => {

  var token = ctx.session.user;

  if (token !== undefined) {
    await next(); //继续下一步路由
  } else {
    //需要登录态域名白名单
    if (ctx.req.method.toUpperCase() === "POST" && CONF.tokenApi.join(',').includes(ctx.req.url)) {
      return ctx.body = { code: 5, message: '无效的token.' };
    }
    await next()
  }
});

app.use(bodyParser())

/** 注册路由 */
const geo_router = require("./api/geo")
const user_router = require("./api/user")
const product_router = require('./api/product')
const upload_router = require('./api/upload')
const maoyan_router = require("./api/maoyan")

app.use(geo_router.routes()).use(geo_router.allowedMethods())
app.use(user_router.routes()).use(user_router.allowedMethods())
app.use(product_router.routes()).use(product_router.allowedMethods())
app.use(upload_router.routes()).use(upload_router.allowedMethods())
app.use(maoyan_router.routes()).use(maoyan_router.allowedMethods())

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
