const Router = require('koa-router')

const { getPosiRange } = require('../util')
const { isArray } = require('methods-util/dist/node/methods_util.cjs')

const product_router = new Router({
    prefix: "/product"
})

product_router.post("/home", async ctx => {

    let { cityname } = ctx.request.body
    if (!cityname) {
        return ctx.body = {
            code: -1,
            msg: "cityname 为必须参数"
        }
    }

    try {
        // 分类
        let categoryRes = await ctx.state.$mysql.execute(`select * from mt_category;`)
        const _tree = (id) => {
            let data = categoryRes[0].filter(item => {
                return item.cid == id
            })
            data.forEach(item => {
                item.children = _tree(item.id)
            })
            return data
        }
        let categoryTree = _tree(null)

        // 推荐
        let cityRes = await ctx.state.$mysql.execute(`select id,cityname from city where cityname="${cityname}"`)
        if (cityRes[0].length === 0) {
            return ctx.body = {
                code: 0,
                msg: "没有找到当前城市"
            }
        }

        let recomendRes = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore,commentNum from mt_shop where city_id = ${cityRes[0][0].id} order by avgScore desc limit 15`)

        return ctx.body = {
            categoryTree,
            recomend: recomendRes[0]
        }
    } catch (e) {
        console.log("err", e)
        return ctx.body = {
            code: 0
        }
    }
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

product_router.post('/meishi/page/:page', async ctx => {
    let page = ctx.params.page || 1
    const pageCount = 20
    let { cityname } = ctx.request.body
    if (!cityname) {
        return ctx.body = {
            code: -1,
            msg: "cityname 为必须参数"
        }
    }
    try {
        let [cityRes] = await ctx.state.$mysql.execute(`select id from city where cityname="${cityname}"`)
        if (cityRes.length === 0) {
            return ctx.body = {
                code: 0,
                msg: "没有找到当前城市"
            }
        }

        let [areaRes] = await ctx.state.$mysql.execute(`select id,cityname from city where pid=${cityRes[0].id}`)
        let [categorys] = await ctx.state.$mysql.execute(`select id,name from mt_category where cid=1`)

        let offset = (page - 1) * pageCount
        // 每页20条店铺信息
        let [rows] = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore,commentNum from mt_shop where city_id = ${cityRes[0].id} order by create_time desc limit ${offset},${pageCount}`)
        let [countRes] = await ctx.state.$mysql.execute(`select count(*) as count from mt_shop where city_id = ${cityRes[0].id} `)
        // 猜你喜欢
        let likeRes = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore from mt_shop where city_id = ${cityRes[0].id} order by avgScore desc limit 15`)

        return ctx.body = {
            code: 1,
            count: countRes[0].count,
            cityname,
            area: areaRes,
            categorys,
            list: rows,
            likes: likeRes[0]
        }
    } catch (e) {
        console.log(e)
        return ctx.body = {
            code: 0,
            msg: e
        }
    }
})

product_router.post('/lvyou/:id', async ctx => {
    let lvyou_id = ctx.params.id
    if (!!lvyou_id) {
        try {

            // 景点信息
            let [rows] = await ctx.state.$mysql.execute(`select c.id,cityname,lv.id,name,address_desc,city_id,lv.img_url,longitude,latitude,phone,open_time,lv.introduction,avgPrice,avgScore,consumers,cateName,level
           from mt_lvyou as lv left join city as c on lv.city_id=c.id where lv.id=${lvyou_id}`)

            if (isArray(rows) && rows.length === 0) {
                return ctx.body = {
                    code: 404
                }
            }

            // 附近景点信息  附近10公里 不包含自身店铺
            let { longitude, latitude } = rows[0]
            let { minlng, maxlng, minlat, maxlat } = getPosiRange(parseFloat(longitude), parseFloat(latitude), 10)
            let nearbyRes = await ctx.state.$mysql.execute(`select id,name,img_url,longitude,latitude,avgPrice,avgScore from mt_lvyou where longitude > ${minlng} and longitude < ${maxlng} and latitude > ${minlat} and latitude < ${maxlat} and id != ${lvyou_id} limit 10`)

            // 猜你喜欢 本市 评分从大到小排列 不包含自身店铺 15个
            let likeRes = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore from mt_lvyou where id != ${lvyou_id} and city_id = ${rows[0].city_id} order by avgScore desc limit 15`)

            let data = Object.assign(rows[0], { nearby: nearbyRes[0], likes: likeRes[0] })

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

product_router.post('/lvyou/page/:page',async ctx=>{
    let page = ctx.params.page || 1
    const pageCount = 20
    let { cityname,sort='create_time',level,cateName } = ctx.request.body
    if (!cityname) {
        return ctx.body = {
            code: -1,
            msg: "cityname 为必须参数"
        }
    }

    let where_level = ''
    if(!level || level == 'all'){
    }else if(level == "A级"){
        where_level = `and level in ('3A','4A','5A')`
    }else{
        where_level = `and level='${level}'`
    }

    let where_cate = ''
    if(!cateName || cateName == 'all'){
    }else{
        where_cate = `and cateName='${cateName}'`
    }

    try {
        let [cityRes] = await ctx.state.$mysql.execute(`select id from city where cityname="${cityname}"`)
        if (cityRes.length === 0) {
            return ctx.body = {
                code: 0,
                msg: "没有找到当前城市"
            }
        }

        let [cateName] = await ctx.state.$mysql.execute(`select cateName from mt_lvyou group by cateName;`)

        let offset = (page - 1) * pageCount
        // 每页20条景点信息
        let [rows] = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore,consumers from mt_lvyou where city_id = ${cityRes[0].id} ${where_level} ${where_cate} order by ${sort == "avgPrice" ? "cast(avgPrice as signed)" : sort} desc limit ${offset},${pageCount}`)
        let [countRes] = await ctx.state.$mysql.execute(`select count(*) as count from mt_lvyou where city_id = ${cityRes[0].id} ${where_level} ${where_cate}`)
        // 猜你喜欢
        let likeRes = await ctx.state.$mysql.execute(`select id,name,img_url,address_desc,avgPrice,avgScore from mt_lvyou where city_id = ${cityRes[0].id} order by avgScore desc limit 15`)

        return ctx.body = {
            code: 1,
            count: countRes[0].count,
            cityname,
            cate: cateName,
            list: rows,
            likes: likeRes[0]
        }
    } catch (e) {
        console.log(e)
        return ctx.body = {
            code: 0,
            msg: e
        }
    }
})

product_router.get('/hotel', async ctx => {

    let { city_id, hotel_type, page, count } = ctx.query
    if (!city_id || !hotel_type || !page || !count) {
        return ctx.body = {
            code: -1
        }
    }
    try {
        let [rows] = await ctx.state.$mysql.execute(`select id,avgPrice,img_url,name,notice,address_desc from mt_shop where city_id=${city_id} and type=${hotel_type} limit ${(page - 1) * count},${count};`)
        return ctx.body = {
            code: 1,
            data: rows
        }
    } catch (e) {
        console.log("err:", e)
        return ctx.body = "Not Found"
    }
})

module.exports = product_router

