const schedule = require("node-schedule")
const mysql = require("mysql2")
const request = require("superagent")
const { MySQL } = require("./conf")

try {

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

        // 每月1日15:30分执行  获取地铁站信息并将其插入到自己的subway表中
        const subwayJob = schedule.scheduleJob({date:1,hour:15,minute:30}, async () => {
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
                { cityID: 150, name: '4103_drw_luoyang', }]

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

    main()

} catch (e) {
    console.log(e)
}