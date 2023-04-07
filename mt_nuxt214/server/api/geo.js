const Router = require("koa-router")

const geo_router = new Router({
    prefix: "/geo"
})

geo_router.get("/city", async ctx => {
    try {
        let [rows] = await ctx.state.$mysql.query(`select cityname from city where type=2`)
        return ctx.body = {
            code: 1,
            data: rows,
            count: rows.length
        }
    } catch {

    }
})

module.exports = geo_router