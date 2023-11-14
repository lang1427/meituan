const schedule = require("node-schedule")
const mysql = require("mysql2")
const request = require("superagent")
const { MySQL } = require("./conf")
const fs = require("fs")
const path = require("path")

try {

    const subwayJob = () => {

        // 每月1日15:30分执行  获取地铁站信息并将其插入到自己的subway表中
        schedule.scheduleJob({ date: 1, hour: 15, minute: 30 }, async () => {
            const subways = [
                { cityID: 2, name: '1100_drw_beijing' },
                { cityID: 25, name: '3100_drw_shanghai' },
                { cityID: 76, name: '4401_drw_guangzhou' },
                { cityID: 77, name: '4403_drw_shenzhen' },
                { cityID: 180, name: '4201_drw_wuhan' },
                { cityID: 27, name: '1200_drw_tianjin' },
                { cityID: 220, name: '3201_drw_nanjing' },
                { cityID: 33, name: '8100_drw_xianggang' },
                { cityID: 32, name: '5000_drw_chongqing' },
                { cityID: 383, name: '3301_drw_hangzhou' },
                { cityID: 244, name: '2101_drw_shenyang' },
                { cityID: 245, name: '2102_drw_dalian' },
                { cityID: 322, name: '5101_drw_chengdu' },
                { cityID: 211, name: '2201_drw_changchun' },
                { cityID: 221, name: '3205_drw_suzhou' },
                { cityID: 80, name: '4406_drw_foshan' },
                { cityID: 367, name: '5301_drw_kunming' },
                { cityID: 311, name: '6101_drw_xian' },
                { cityID: 149, name: '4101_drw_zhengzhou' },
                { cityID: 197, name: '4301_drw_changsha' },
                { cityID: 388, name: '3302_drw_ningbo' },
                { cityID: 222, name: '3202_drw_wuxi' },
                { cityID: 284, name: '3702_drw_qingdao' },
                { cityID: 233, name: '3601_drw_nanchang' },
                { cityID: 53, name: '3501_drw_fuzhou' },
                { cityID: 79, name: '4419_drw_dongguan' },
                { cityID: 97, name: '4501_drw_nanning' },
                { cityID: 3401, name: '3401_drw_hefei' },
                { cityID: 111, name: '5201_drw_guiyang' },
                { cityID: 60, name: '3502_drw_xiamen' },
                { cityID: 167, name: '2301_drw_haerbin' },
                { cityID: 138, name: '1301_drw_shijiazhuang' },
                { cityID: 351, name: '6501_drw_wulumuqi' },
                { cityID: 391, name: '3303_drw_wenzhou' },
                { cityID: 283, name: '3701_drw_jinan' },
                { cityID: 62, name: '6201_drw_lanzhou' },
                { cityID: 223, name: '3204_drw_changzhou' },
                { cityID: 229, name: '3203_drw_xuzhou' },
                { cityID: 300, name: '1401_drw_taiyuan' },
                { cityID: 258, name: '1501_drw_huhehaote' },
                { cityID: 150, name: '4103_drw_luoyang' }]

            for (let k = 0; k < subways.length; k++) {
                const resData = await request.get(`http://map.amap.com/service/subway?_${Date.now()}&srhdata=${subways[k].name}.json`)

                let data = JSON.parse(resData.text)

                let sql_str = `INSERT INTO subway(city_id,line,name,longitude,latitude) VALUES `
                var line = data.l
                for (let i = 0; i < line.length; i++) {
                    for (let j = 0; j < line[i].st.length; j++) {
                        let sl = line[i].st[j].sl.split(',')
                        sql_str += `(${subways[k].cityID},"${line[i].ln}","${line[i].st[j].n}","${sl[0]}","${sl[1]}"),`
                    }
                }

                await $mysql.execute(sql_str.substring(0, sql_str.length - 1))
            }
        })
    }

    const main = async () => {
        $mysql = await mysql.createPool({
            host: MySQL.host,
            user: MySQL.user,
            password: MySQL.pwd,
            database: MySQL.database,
            port: MySQL.port,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        })

        subwayJob()

        // for (let i = 1; i < 10; i++) {
        //     const lvyouData = await request.get(`https://minsu.dianping.com/api/phx/cprod/products?dateBegin=20230918&dateEnd=20230919&cityPinyin=qingyuan&pageNow=${i}&isInternal=false&_token=eJyFlQm27CoIRaekIGCGY5f5D%2BEfiNXn37eyUiU2uOEQ1aKipKwJb9NDb2y2v8e3nWHPP8YfdqJDx9PGiCXY1bIeNrlw48yCPvTzYmHmxAP9gmewwVaMt5ipbltF%2B0S74zdhfKLtaw4%2B6bRK6ovQc7DRYCKsJaygxadlytgFNh20rP%2BsX5TVzOdMPO3JJ2SYtWB5nz34pBRDuCc1Ml02sUdHv8kMvmZJso9L9%2F10guj06GQKaLjCd%2BFMB3oqJSlYnxkZc0ZeQoQ8l0m%2BX4YnSGNmBQINWfBn2nWiB%2FQgYGR%2BAHNqpwp9RJeelKmCLVPXEznOfFCnBtZs1U4zmup6dLxkA78Fo%2BqeYakgo%2BTWoZWYJlepctBhRZsMt%2BFfEVvRUvJlI%2FIJW6WRZ6EhWwn%2FyCLiFwU7rML%2Bf0LcxAWCQTRtXBV5dX%2FqoWI1QUXYRkizNDzm%2BsFGvq3LLGXboSfiVZHQo6Mv0bQF%2FYOPS9TX5gcfWq94YK8vuzxs%2BEO9WA4b0ZHXXw62hsha%2BPcWtId%2BXkvm%2B0H%2F4W2PNmrQ5wvUrXiDF%2BQ%2BP3LDjPGFl1CRhiejFpmc3%2Be7%2F4q8JteDSxCMqzY3j4X%2F%2FsEzNo9snok2aqUNr5cnUb4h0uh%2FEZX4ar6JTt%2F1SaQRcY5xJ7r8Fy%2FLLyLD%2F0V0BlHeX%2Bk1v%2F0Pjzx5CPuQ%2B%2FrhaR88FTumrVjy7EXG0g2PBg8qMHg0%2FD145JYHHt94XGe64ekfPGOrcfGk8E%2B7Qj958uZpkR0%2FN148dsOD3WP8weMn2G8FrQ%2B9DPn3E6hvHt3%2B%2BxvP%2FMrPvNR6q%2Biy%2Ff%2FF4xGgqv%2FJU0GUQ%2F%2FiR%2FjWS354dNfPwT149K2e7baezU%2FrNx4JXX955geP3wGPeqZdPx7Xb35m8FQQpTjTX%2FWjtzzu76ofv3FwS1zfl3gNZTNx%2FU%2B%2FdpAGPzOOyybsV6xM4biDRuT59X1VnL8rzpMUPLglH%2FtRK6PkUuO7Jpk2%2FwNTWdth&yodaReady=h5&csecplatform=4&csecversion=2.1.2`)
        //         .set('User-Agent', "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1")

        //     let { data } = JSON.parse(lvyouData.text)

        //     data = data.list

        //     let sql_str = `\r\nINSERT INTO mt_shop(id,name,address_desc,city_id,img_url,longitude,latitude,phone,open_time,notice,type,avgPrice,avgScore,commentNum,create_time) VALUES `
        //     for (let i = 0; i < data.length; i++) {
        //         // if (data[i].cityId == 440100) {
        //         let type = 51
        //         if (data[i].title.includes("别墅")) {
        //             type = 52
        //         }
        //         sql_str += `(${data[i].productId},"${data[i].title}","${data[i].locationDesc}",87,"${data[i].coverImage}","${data[i].longitude / 1000000}","${data[i].latitude / 1000000}","","全天","${data[i].ugcDesc || ""}","${type}","${data[i].avgFinalPrice / 100 || ""}","${data[i].starRating / 10 || ""}",${data[i].commentNumber || 0},1693211574),`
        //         // }
        //     }
        //     console.log(`执行第${i}次...`)
        //     fs.appendFileSync("./jiudian.sql", sql_str)
        // }
    }

    main()

} catch (e) {
    console.log(e)
}