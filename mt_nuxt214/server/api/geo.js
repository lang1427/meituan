const Router = require("koa-router")

const { getUrlParam } = require('methods-util/dist/node/methods_util.cjs')

const geo_router = new Router({
    prefix: "/geo"
})

geo_router.get("/city", async ctx => {
    try {
        let id = getUrlParam('id', ctx.request.url)
        if (!!id) {
            if (id === "1") {
                var [rows] = await ctx.state.$mysql.query(`select id,cityname from city where type=1 and id!=52`)
            } else if (["2", "33", "34", "35"].includes(id)) {
                return ctx.body = {
                    code: 1,
                    data: [],
                    count: 0
                }
            } else {
                var [rows] = await ctx.state.$mysql.query(`select cityname from city where pid=${id} and id!=52`)
            }
        } else {
            var [rows] = await ctx.state.$mysql.query(`select cityname from city where type=2 and id!=52`)
        }
        return ctx.body = {
            code: 1,
            data: rows,
            count: rows.length
        }
    } catch (e) {
        console.log("err:", e)
    }
})

module.exports = geo_router