const Router = require("koa-router")
const request = require("superagent")
const cheerio = require("cheerio")
const { getUrlParam } = require('methods-util/dist/node/methods_util.cjs')

const maoyan_router = new Router({
    prefix: "/maoyan"
})

maoyan_router.get('/', async ctx => {
    const maoyanData = await request.get("https://www.maoyan.com")
        .set('Cookie', 'uuid_n_v=v1; uuid=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; _csrf=e8a0cbfd74a70c0cfff5f511f1217cc5405ca5e1ece647de2c7954352d6dcd20; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1699426440; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1699429294; _lxsdk_cuid=18ab5964bfbc8-0dc5842ad1cf4-5437971-4a574-18ab5964bfbc8; _lxsdk=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; __mta=150803081.1699429294834.1699429294834.1699429294834.1; _lxsdk_s=18bade1173a-968-b8a-14d%7C%7C4')
        .set('User-Agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36")

    let html = maoyanData.text
    let $ = cheerio.load(html)

    // 正在热映
    let hotCount = $(".movie-grid .panel").eq(0).find("h2").text()
    let hotMovieList = []
    $(".movie-grid .panel").eq(0).find(".movie-list dd").each((index, ele) => {
        let id = $(ele).children('.movie-item').children('a').attr('data-val')
        let title = $(ele).find('.movie-title').text()
        let img = $(ele).find('.movie-poster-img').attr('data-src')
        let score = $(ele).find('.movie-score').text()
        let ver = $(ele).find('.movie-ver').children('i').attr('class')
        hotMovieList.push({ id, title, img, score, ver })
    })

    // 即将上映
    let upcomingCount = $(".movie-grid .panel").eq(1).find("h2").text()
    let upcomingList = []
    $(".movie-grid .panel").eq(0).find(".movie-list dd").each((index, ele) => {
        let id = $(ele).children('.movie-item').children('a').attr('data-val')
        let title = $(ele).find('.movie-title').text()
        let img = $(ele).find('.movie-poster-img').attr('data-src')
        let score = $(ele).find('.movie-score').text()
        let ver = $(ele).find('.movie-ver').children('i').attr('class')
        let rt = $(ele).find('.movie-rt').text()
        upcomingList.push({ id, title, img, score, ver, rt })
    })

    // 今日票房
    let rankings = []
    $(".ranking-box-wrapper .ranking-item").each((index, ele) => {
        let id = $(ele).children('a').attr('data-val')
        if (index === 0) {
            var title = $(ele).find('.ranking-top-moive-name').text()
            var img = $(ele).find('.ranking-img').attr('data-src')
        } else {
            var title = $(ele).find('.ranking-movie-name').text()
        }
        rankings.push({ id, title, img })
    })

    // Top100
    let Top100 = []
    $(".top100-wrapper .ranking-item").each((index, ele) => {
        let id = $(ele).children('a').attr('data-val')
        if (index === 0) {
            var title = $(ele).find('.ranking-top-moive-name').text()
            var img = $(ele).find('.ranking-img').attr('data-src')
        } else {
            var title = $(ele).find('.ranking-movie-name').text()
        }
        Top100.push({ id, title, img })
    })

    return ctx.body = {
        hotCount,
        hotMovieList,
        upcomingCount,
        upcomingList,
        rankings,
        Top100
    }
})

// 电影
maoyan_router.get('/films', async ctx => {
    let showType = getUrlParam('showType', ctx.request.url) || 1 // 1.正在热映    2.即将上映     3.经典影片
    let sortId = getUrlParam('sortId', ctx.request.url) || 1 // 1.按热门排序  2.按时间排序   3.按评价排序
    let offset = getUrlParam('offset', ctx.request.url) || 0 // 数据偏移量 +30

    const maoyanData = await request.get(`https://www.maoyan.com/films?showType=${showType}&sortId=${sortId}&offset=${offset}`)
        .set('Cookie', 'uuid_n_v=v1; uuid=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; _csrf=e8a0cbfd74a70c0cfff5f511f1217cc5405ca5e1ece647de2c7954352d6dcd20; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1699426440; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1699429294; _lxsdk_cuid=18ab5964bfbc8-0dc5842ad1cf4-5437971-4a574-18ab5964bfbc8; _lxsdk=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; __mta=150803081.1699429294834.1699429294834.1699429294834.1; _lxsdk_s=18bade1173a-968-b8a-14d%7C%7C4')
        .set('User-Agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36")

    let html = maoyanData.text
    let $ = cheerio.load(html)

    let movieList = []

    $('.movie-list dd').each((index, ele) => {
        let id = $(ele).children('.movie-item').children('a').attr('data-val')
        let title = $(ele).find('.name').attr('title')
        let img = $(ele).find('.movie-poster img').eq(1).attr('data-src')
        let score = $(ele).find('.score').text() || '暂无评分'
        let ver = $(ele).find('.movie-ver').children('i').attr('class')
        let type = $(ele).find('.movie-hover-title').eq(1).html()
        let performer = $(ele).find('.movie-hover-title').eq(2).html()
        let time = $(ele).find('.movie-hover-title').eq(3).html()
        movieList.push({ id, title, img, score, ver, type, performer, time })
    })

    return ctx.body = {
        list: movieList
    }
})

// 详情
maoyan_router.get('/films/:id', async ctx => {
    let filmsID = ctx.params.id

    if (!!filmsID) {
        // https://www.maoyan.com/ajax/films/4055?timeStamp=1699597896919&index=10&signKey=d93745fbd77fc32c6a0ac1298d83e0e9&channelId=40011&sVersion=1&webdriver=false
        // 'https://www.maoyan.com/films/' + filmsID
        let data = await request.get(`https://www.maoyan.com/ajax/films/${filmsID}?timeStamp=1699597896919&index=10&signKey=d93745fbd77fc32c6a0ac1298d83e0e9&channelId=40011&sVersion=1&webdriver=false`)  //  https://tfz.maoyan.com/yamaha/verify?requestCode=837bf6e34a7a8d3bde89dfd58ad6cfe9ocbo1&redirectURL=https%3A%2F%2Fwww.maoyan.com%2Ffilms%2F4055#/
            .set('Cookie', 'uuid_n_v=v1; uuid=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; _csrf=e8a0cbfd74a70c0cfff5f511f1217cc5405ca5e1ece647de2c7954352d6dcd20; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1699426440; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1699429294; _lxsdk_cuid=18ab5964bfbc8-0dc5842ad1cf4-5437971-4a574-18ab5964bfbc8; _lxsdk=3DA573907E0A11EEBF0AAFDCFAC3033FC85950B4990D4C14995FF1DD430E4E53; __mta=150803081.1699429294834.1699429294834.1699429294834.1; _lxsdk_s=18bade1173a-968-b8a-14d%7C%7C4')
            .set('User-Agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36")
            .set('Host','www.maoyan.com')
            .set('Sec-Ch-Ua','"Google Chrome";v="117", "Not;A=Brand";v="8", "Chromium";v="117"')
            .set('Sec-Ch-Ua-Platform',"Windows")
            .set('Sec-Fetch-Site','none')
            .set('Sec-Fetch-User','?1')
            console.log(data.text)
        let $ = cheerio.load(data.text)



        let avatar = $('.avatar').attr('src')  // 头像
        let ver = $('.movie-ver').children('i').attr('class') // 2d 3d 描述
        let name = $('.name').text() // 中文名
        let ename = $('.ename').text() // 英文名
        let ellipsis = $('.movie-brief-container ul').html()
        let desc = $('.dra').text() // 剧情简介

        let directors = [] // 导演
        $('.celebrity-container').eq(1).children('celebrity-group').eq(0).find('.celebrity').each((index, ele) => {
            let name = $(ele).find('.name').text()
            let avatar = $(ele).find('.default-img').attr('src')
            directors.push(name, avatar)
        })

        let performers = [] // 演员
        $('.celebrity-container').eq(1).children('celebrity-group').eq(1).find('.celebrity').each((index, ele) => {
            let name = $(ele).find('.name').text()
            let avatar = $(ele).find('.default-img').attr('src')
            let role = $(ele).find('.role').text()
            performers.push(name, avatar, role)
        })

        let imgs = [] // 图集
        $('.album img').each((index, ele) => {
            imgs.push($(ele).attr('src'))
        })

        let produce = $('.attribute-item-content').eq(0).text() // 发行公司
        let duration = $('.attribute-item-content').eq(1).text() // 时长

        let lastday_rank = $('.film-mbox').children('.film-mbox-item').eq(0).children('.mbox-name').eq(0).text() // 上周排名
        let first_week_sales = $('.film-mbox').children('.film-mbox-item').eq(1).children('.mbox-name').eq(0).text() // 首周票房
        let total_sales = $('.film-mbox').children('.film-mbox-item').eq(2).children('.mbox-name').eq(0).text() // 累计票房

        let previews = [] // 预告片
        $('.preview-container li').each((index, ele) => {
            let name = $(ele).find('.one-line').children('a').text()
            let avatar = $(ele).find('.top-info-thumb img').attr('src')
            let play_count = $(ele).find('.video-play-count').text()
            let href = $(ele).find('.one-line').children('a').attr('href')
            previews.push({ name, avatar, play_count, href })
        })

        return ctx.body = {
            avatar,
            ver,
            name,
            ename,
            ellipsis,
            desc,
            directors,
            performers,
            imgs,
            produce,
            duration,
            lastday_rank,
            first_week_sales,
            total_sales,
            previews
        }

    } else {
        return ctx.body = {
            code: 404
        }
    }
})

module.exports = maoyan_router