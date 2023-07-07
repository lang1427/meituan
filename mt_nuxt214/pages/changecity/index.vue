<template>
    <div class="page index">
        <div class="op-area">
            <div class="choose-by-province">
                <h3 class="l-attr">按省份选择：</h3>&nbsp;&nbsp;
                <el-select v-model="province_value" placeholder="请选择省份">
                    <el-option v-for="item in province_select" :key="item.id" :label="item.cityname" :value="item.id">
                    </el-option>
                </el-select>
                <el-select v-model="city_value" :disabled="city_select.length == '0' ? true : false" placeholder="请选择城市">
                    <el-option v-for="item in city_select" :key="item.cityname" :label="item.cityname"
                        :value="item.cityname">
                    </el-option>
                </el-select>
            </div>
            <div class="search">
                <h3 class="l-attr">直接搜索：</h3><input type="text" placeholder="请输入城市中文或拼音" class="search-text" value="">
            </div>
        </div>
        <div class="citylist">
            <h3 class="l-attr">热门城市：</h3>
            <p class="r-info">
                <nuxt-link target="_blank" :to="'/?cityname=' + item" v-for="item of hot_city" :key="item" class="link city">{{ item }}</nuxt-link>
            </p>
        </div>
        <div class="alphabet">
            <h3 class="l-attr">按拼音首字母选择：</h3>
            <p class="r-info">
                <span class="letter" v-for="item in first_letter_arr" :key="item" @click="labelFor(item)">{{ item }}</span>
            </p>
        </div>
        <div class="alphabet-city-area">
            <div v-for="item of city_data" :key="item.title" class="city-area" :id="`city-${item.title}`">
                <span class="city-label">{{ item.title }}</span>
                <span class="cities">
                    <nuxt-link target="_blank" v-for="city of item.items" :key="city.cityname" :to="'/?cityname=' + city.cityname" class="link city">{{
                        city.cityname }}</nuxt-link>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import pinyin from "pinyin"
export default {
    data() {
        return {
            city_data: [],
            first_letter: "ABCDEFGHJKLMNPQRSTWXYZ",
            province_select: [],
            province_value: null,
            city_select: [],
            city_value: null,
            hot_city: ['北京', '上海', '广州', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都']
        }
    },
    computed: {
        first_letter_arr() {
            return this.first_letter.split("")
        }
    },
    created() {
        this.getCitySelect(1)
    },
    methods: {
        async getCitySelect(id) {
            // id=1时获取省份信息，!=1时获取对应省份的所有城市信息
            try {
                const { data } = await this.$axios.get('/geo/city', { params: { id } })
                id === 1 ? this.province_select = data.data : this.city_select = data.data
            } catch (e) {
                console.log("get city select failed:", e)
            }
        },
        labelFor(letter) {
            this.$router.push(`${this.$route.path}#city-${letter}`)
        }
    },
    watch: {
        province_value: function (newVal) {
            this.getCitySelect(newVal)
        }
    },
    async asyncData(ctx) {
        let normalizeCity = (list) => {
            let map = {};
            list.forEach((item, index) => {
                /** 所有 */
                const key = item.pin;
                if (!map[key]) {
                    map[key] = {
                        title: key,
                        items: []
                    };
                }
                map[key].items.push(item);
            });
            let all = []; // 所有数据，包含title，items
            for (let key in map) {
                if (map[key].title.match(/[A-Z]/)) {
                    all.push(map[key]);
                }
            }
            // 所有大写字母排序
            all.sort((a, b) => {
                return a.title.charCodeAt(0) - b.title.charCodeAt(0);
            });
            return all;
        }
        try {
            const { data } = await ctx.$axios.get('/geo/city')
            let city_list = data.data
            city_list.map(item => {
                let py = pinyin(item.cityname, {
                    style: pinyin.STYLE_FIRST_LETTER,
                    heteronym: true,              // 启用多音字模式
                    segment: true,
                })
                item.pin = py[0][0].toUpperCase()
            })
            return { city_data: normalizeCity(city_list) }
        } catch (e) {
            console.log("err:", e)
        }
    }
}
</script>
<style lang="less" scoped>
.page {
    width: 1190px;
    box-sizing: border-box;
    margin: 20px auto 0;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    min-height: 1000px;
    padding: 20px;

    h3.l-attr {
        vertical-align: middle;
        font-size: 16px;
        color: #333;
        font-weight: 500;
        display: inline-block;
    }

    .op-area {
        padding-bottom: 30px;
        border-bottom: 1px solid #E5E5E5;


        .choose-by-province,
        .search {
            display: inline-block;
            vertical-align: middle;
        }

        .search {
            margin-left: 40px;
            position: relative;

            .search-text {
                padding-left: 10px;
                width: 220px;
                height: 40px;
                border-radius: 4px;
                border: 1px solid #E5E5E5;
                margin-left: 10px;
                font-size: 14px;
                color: #666;
                box-sizing: border-box;

            }

        }
    }

    p.r-info {
        font-size: 14px;
        vertical-align: top;
        display: inline-block;
        margin-top: 2px;
    }

    .citylist {
        border-bottom: 1px solid #E5E5E5;
        padding: 30px 0;

        .r-info {
            max-width: 900px;
        }

        .city {
            margin: 0 20px;
            color: #666;
            display: inline-block;

            &:hover {
                color: #222222;
                font-weight: 500;
            }

        }

    }

    .alphabet {
        padding: 30px 0;

        .r-info {
            max-width: 1000px;
        }

        .letter {
            font-size: 15px;
            margin: 0 17px;
            color: #666;
            display: inline-block;
            margin: 0 10px;
            width: 25px;
            height: 25px;
            padding-top: 2px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border-radius: 50%;

            &:hover {
                font-weight: 500;
                color: #222222;
                background: #F8F8F8;
            }

        }

    }

    .alphabet-city-area {
        text-align: left;

        .city-area {
            padding: 13px 30px 13px 10px;
            border-radius: 10px;
            transition: background-color 500ms;

            &:hover {
                background: #F8F8F8;
            }

            .city-label {
                box-sizing: border-box;
                vertical-align: top;
                padding-top: 10px;
                display: inline-block;
                text-align: center;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                color: #222222;
                background: #FFD000;
            }

            .cities {
                display: inline-block;
                max-width: 1062px;

                .city {
                    margin: 10px 20px;
                    color: #666;
                    display: inline-block;
                    font-size: 14px;

                    &:hover {
                        color: #222222;
                        font-weight: 500;
                    }

                }

                .sa-city {
                    color: #FF6600;
                }
            }
        }
    }
}
</style>