const Router = require("koa-router")

const { getUrlParam } = require('methods-util/dist/node/methods_util.cjs')
const axios = require("axios")
const { aMapWebApiKEY } = require("../conf")

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

geo_router.get('/current_city',async ctx =>{
    // nuxt 中 无法在页面加载前(fetch,asyncData)获取到经纬度（没有Window对象）
    // let res =  await axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=${aMapWebApiKEY}&location=116.310003,39.991957`)

    //  根据ip地址进行定位，若没有传ip则取客户http之中的请求来进行定位
    let res =  await axios.get(`https://restapi.amap.com/v3/ip?key=${aMapWebApiKEY}`)
    return ctx.body = res.data
})

module.exports = geo_router