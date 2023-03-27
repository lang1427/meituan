const router = require('koa-router')()

const request = require('superagent')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

router.prefix('/mt')

router.get('/', async (ctx, next) => {
  json_str = fs.readFileSync(path.join(__dirname, './city.json')).toString()

  json = JSON.parse(json_str)

  let str = ""

  for (let key in json) {
    try {
      let res = await request.get(`https://${key}.meituan.com/ptapi/recommends`)
      let data = res.text

      data[key] = json.key
      str += JSON.stringify(data)
    } catch (e) {
      if (!!e.response) {
        console.log(e.response.request.url)
      } else {
        console.log(e)
      }
    }

  }

  return ctx.body = str
})

module.exports = router
