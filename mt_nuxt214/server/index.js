const Koa = require('koa')
const bodyParser = require('koa-bodyparser');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const mysql = require("mysql2/promise")
const CONF = require('./conf')

const app = new Koa()

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

app.use(bodyParser())

const geo_router = require("./api/geo")
app.use(geo_router.routes()).use(geo_router.allowedMethods())

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
