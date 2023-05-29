const Router = require('koa-router')

const { getPosiRange } = require('../util')
const { isArray } = require('methods-util/dist/node/methods_util.cjs')

const product_router = new Router({
    prefix: "/product"
})

product_router.post('/meishi/:id', async ctx => {
    let meishi_id = ctx.params.id
    if (!!meishi_id) {
        try {

            // 美食信息
            let [rows] = await ctx.state.$mysql.execute(`select c.id,cityname,s.id,name,address_desc,city_id,s.img_url,longitude,latitude,phone,open_time,s.type,avgPrice,avgScore,commentNum
           from mt_shop as s left join city as c on s.city_id=c.id where s.id=${meishi_id}`)

            if (isArray(rows) && rows.length === 0) {
                return ctx.body = {
                    code: 404
                }
            }

            // 美食菜单
            let menuRes = await ctx.state.$mysql.execute(`select title,img_url,price,shop_id from mt_product where shop_id=${meishi_id}`)
            let topMenus = [], menus = [];
            if (menuRes[0].length !== 0) {
                menuRes[0].forEach(element => {
                    if (element.img_url === "") {
                        menus.push(element)
                    } else {
                        topMenus.push(element)
                    }
                });
            }

            // 附近商家信息  附近10公里 不包含自身店铺
            let { longitude, latitude } = rows[0]
            let { minlng, maxlng, minlat, maxlat } = getPosiRange(parseFloat(longitude), parseFloat(latitude), 10)
            let nearbyRes = await ctx.state.$mysql.execute(`select id,name,img_url,longitude,latitude,avgPrice,avgScore from mt_shop where longitude > ${minlng} and longitude < ${maxlng} and latitude > ${minlat} and latitude < ${maxlat} and id != ${meishi_id} limit 10`)

            // 猜你喜欢 本市 评分从大到小排列 不包含自身店铺 15个
            let likeRes = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore from mt_shop where id != ${meishi_id} and city_id = ${rows[0].city_id} order by avgScore desc limit 15`)


            let data = Object.assign(rows[0], { topMenus, menus, nearby: nearbyRes[0], likes: likeRes[0] })

            return ctx.body = {
                code: 1,
                data,
            }
        } catch (e) {
            console.log(e)
            return ctx.body = {
                code: 404
            }
        }
    } else {
        return ctx.body = {
            code: 404
        }
    }
})

module.exports = product_router

