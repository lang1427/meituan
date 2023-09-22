<template>
    <section class="poiList-wrap clear">
        <div class="content clear">
            <div class="breadcrumbs"><span><nuxt-link to="/">{{ cityname }}美团</nuxt-link>
                    &gt;
                </span><span><nuxt-link to="/lvyou/page/1">{{ cityname }}旅游</nuxt-link>
                </span>
            </div>
            <div class="left">
                <div class="filter">
                    <div class="condition">
                        <div class="cont clear">
                            <div class="classification">级别</div>
                            <div @click="goLevel('all')" :class="['all',levelValue == 'all' ? 'on' :'']">全部</div>
                            <ul class="more clear">
                                <li v-for="item of levels" :key="item">
                                    <a href="javascript:;" @click="goLevel(item)" :class="levelValue == item ? 'on' : ''">{{ item }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="cont clear">
                            <div class="classification">分类</div>
                            <div @click="goCate('all')" :class="['all',cateValue == 'all' ? 'on' :'']">全部</div>
                            <ul class="more clear">
                                <li v-for="item of cates" :key="item.cateName">
                                    <span @click="goCate(item.cateName)" :class="['hasSub',cateValue == item.cateName ? 'on' :'']"><b>{{ item.cateName }}</b></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="list">
                        <div>
                            <div class="tags">
                                <span v-for="item of tags" :key="item.value">
                                    <a href="javascript:;" @click="goTag(item.value)" :class="[item.value === tagValue ? 'on' :'']">{{ item.name }}</a>
                                </span>
                            </div>
                            <div class="line"></div>
                        </div>
                        <ul class="list-ul">
                            <li v-for="(item, index) of  list " :key="item.id" :class="['clear', (index != list.length - 1) ? 'btm' : '']">
                                <div class="img"><nuxt-link :to="'/lvyou/' + item.id">
                                        <div class="fl-count">{{ index + 1 }}</div>
                                        <div class="imgbox" style="height: 125px; width: 220px;"><img :data-src="item.img_url">
                                        </div>
                                    </nuxt-link></div>
                                <div class="info"><nuxt-link :to="'/lvyou/' + item.id">
                                        <h4>{{ item.name }}</h4>
                                        <div class="source clear">
                                            <div class="star-cont">
                                                <el-rate :value="Number(item.avgScore)" disabled
                                                    text-color="#ff9900"></el-rate>
                                            </div>
                                            <p>{{ item.avgScore }}分<span>{{ item.consumers }}</span>
                                            </p>
                                        </div>
                                        <p class="desc">
                                            {{ item.address_desc }}<span>人均￥{{ item.avgPrice }}</span>
                                        </p>
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-pagination">
                        <el-pagination layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"
                            :current-page.sync="currentPage" :page-size="20">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="right">
                <guess-you-like :likes=likes></guess-you-like>
            </div>
        </div>
    </section>
</template>

<script>
import guessYouLike from "~/components/guess_you_like.vue";
export default {
    watchQuery:true, // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
    components: {
        guessYouLike
    },
    data() {
        return {
            tags:[{name:"默认",value:"create_time"},{name:"价格",value:"avgPrice"},{name:"好评最多",value:"avgScore"}],
            currentPage: Number(this.$route.params.page),
            total: 0,
            cityname: "",
            cates: [],
            levels: ['A级','3A','4A','5A'],
            list: [],
            likes: []
        }
    },
    computed:{
        tagValue(){
            return this.$route.query.sort || 'create_time'
        },
        levelValue(){
            return this.$route.query.level || 'all'
        },
        cateValue(){
            return this.$route.query.cateName || 'all'
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$router.push({path:`/lvyou/page/${val}`,query:{...this.$route.query}})
        },
        goTag(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,sort:val}})
        },
        goLevel(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,level:val}})
        },
        goCate(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,cateName:val}})
        }
    },
    async asyncData(ctx) {
        let {sort,level,cateName} = ctx.route.query
        let page = ctx.route.params.page
        let city = ctx.store.state.geo.position.city.replace("市", "")
        let { data } = await ctx.$axios.post(`/product/lvyou/page/${page}`, { cityname: city,sort,level,cateName })
        if (data.code === 1) {
            return { list: data.list, likes: data.likes, cates: data.cate, cityname: data.cityname, total: data.count }
        } else if (data.code === 404) {

        }
    }
}
</script>

<style lang="less" scoped>
.poiList-wrap {
    a {
        text-decoration: none;
        cursor: pointer;
        color: #222;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .clear:after {
        clear: both;
        content: '';
        display: block;
        width: 0;
        height: 0;
    }

    .line {
        height: 1px;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }

    .mt-pagination {
        text-align: center;
        margin-top: 40px;
    }

    .content {
        width: 1190px;
        margin: auto;

        .left {
            float: left;
            width: 950px;

            b {
                font-weight: normal;
            }

            .filter {
                position: relative;
                border: 1px solid #e5e5e5;
                background: #fff;
                border-radius: 4px;
                margin-bottom: 14px;

                .condition {
                    padding-left: 20px;

                    .cont {
                        padding: 10px 0 0 0;
                        line-height: 20px;
                        overflow: hidden;

                        .classification {
                            width: 65px;
                            color: #333;
                            font-size: 14px;
                            float: left;
                        }

                    }

                    .all {
                        width: 53px;
                        text-align: center;
                        margin: 0 13px 0 9px;
                        color: #666;
                        float: left;
                        font-size: 14px;
                        cursor: pointer;
                    }

                    .more {
                        color: #666;
                        float: left;
                        border-bottom: 1px solid #e5e5e5;
                        width: 788px;

                        li {
                            float: left;
                            height: 28px;
                            //margin: 0 0 6px 0;
                            font-size: 14px;
                            cursor: pointer;
                            min-width: 125px;

                            a,
                            span {
                                color: #666;
                                padding: 0 10px;
                                display: inline-block;

                                b {
                                    display: inline-block;
                                }
                            }
                        }

                        .hasSub:after {
                            content: '';
                            margin-left: 4px;
                            vertical-align: -2px;
                            border: 4px solid transparent;
                            border-top-color: #666;
                            display: inline-block;
                        }
                    }

                    .on {
                        background: #13D1BE;
                        border-top-left-radius: 100px;
                        border-top-right-radius: 100px;
                        border-bottom-left-radius: 100px;
                        border-bottom-right-radius: 100px;
                        color: #fff !important;

                        &:after {
                            border-top-color: #fff !important;
                        }

                    }

                    .cont:last-child .more {
                        border-bottom: 0;
                    }

                }

            }

            .list {
                padding: 15px 20px 21px 20px;
                background: #fff;
                border-radius: 4px;
                border: 1px solid #e5e5e5;
                color: #666;

                .tags {
                    padding-bottom: 13px;
                    font-size: 14px;
                    line-height: 20px;

                    span {
                        display: inline-block;
                        min-width: 96px;

                        a {
                            padding: 0 10px;
                        }

                    }

                    .on {
                        color: #31BCAD;
                    }

                    .price {
                        position: relative;

                        &:before {
                            border: 3.2px solid transparent;
                            display: block;
                            right: 0;
                            top: 50%;
                            position: absolute;
                            content: "";
                            height: 0;
                            width: 0;
                            border-bottom-width: 4px;
                            border-bottom-color: #ccc;
                            margin-top: -8px;
                        }

                        &:after {
                            border: 3.2px solid transparent;
                            display: block;
                            right: 0;
                            top: 50%;
                            position: absolute;
                            border-top-width: 4px;
                            border-top-color: #ccc;
                            margin-top: 1px;
                            content: "";
                            height: 0;
                            width: 0;
                        }

                    }

                    .onUpLight,
                    .onDownLight {
                        color: #13D1BE;
                    }

                    .onUpLight:before {
                        border-bottom-color: #13D1BE;
                    }

                    .onDownLight:after {
                        border-top-color: #13D1BE;
                    }


                }

                .list-ul {
                    li {
                        margin-top: 20px;

                        .img {
                            width: 220px;
                            height: 125px;
                            float: left;
                            border-radius: 4px;
                            position: relative;

                            a {
                                display: block;
                            }

                            .fl-count {
                                background: #FB6433;
                                border-radius: 2px;
                                position: absolute;
                                line-height: 13px;
                                width: 20px;
                                margin-left: -3px;
                                margin-top: 3px;
                                text-align: center;
                                font-size: 12px;
                                color: #fff;
                                z-index: 200;
                            }

                        }

                        .info {
                            padding: 4px 0 0 20px;
                            max-width: 666px;
                            font-size: 12px;
                            float: left;

                            a {
                                display: block;
                            }

                            h4 {
                                font-size: 16px;
                                line-height: 22px;
                                color: #222;
                            }

                            .source {
                                padding: 6px 0 0 0;
                                height: 17px;
                                line-height: 13px;

                                .star-cont {
                                    //float: left;
                                    display: inline-block;
                                }

                                p {
                                    display: inline-block;
                                    padding-left: 6px;

                                    span {
                                        margin-left: 10px;
                                        color: #ff6600;
                                    }

                                }

                            }

                            .desc {
                                line-height: 17px;
                                color: #666;
                                padding-top: 7px;
                                margin-bottom: 11px;

                                span {
                                    display: block;
                                    margin-top: 8px;
                                }

                            }

                            .other {
                                border-top: 1px #e5e5e5 dashed;
                                padding: 16px 0 0 0;

                                .one {
                                    padding-bottom: 18px;

                                    h4 {
                                        font-size: 14px;
                                        line-height: 14px;
                                        margin: 0 0 2px 0;
                                        font-weight: normal;
                                        color: #666;
                                    }

                                    p {
                                        line-height: 21px;
                                        font-size: 12px;
                                        color: #999;

                                        span {
                                            font-size: 15px;
                                            color: #ff6600;
                                            display: inline-block;
                                            margin-right: 10px;

                                            .dl {
                                                font-size: 12px;
                                            }

                                        }

                                        .sale {
                                            margin-left: 10px;
                                        }

                                    }

                                }

                                .more {
                                    color: #999;
                                    line-height: 17px;
                                    cursor: pointer;

                                    b {
                                        vertical-align: middle;
                                        width: 9px;
                                        height: 4px;
                                        display: inline-block;
                                        // background-image: url('../../../assets/131ebf7d42a5288d.png');
                                        background-size: 100% 100%;
                                        margin-left: 4px;
                                    }

                                    .on {
                                        // background-image: url('../../../assets/7c842d96aa3614da.png');
                                        background-size: 100% 100%;
                                    }

                                }

                            }

                        }

                        &:last-child {
                            border: 0;
                        }

                    }

                    .advertisement {
                        position: absolute;
                        right: 0;
                        font-size: 12px;
                        padding: 0 2px;
                        border: 1px solid #E5E5E5;
                        line-height: 15px;
                        color: #E5E5E5;
                    }

                    .btm {
                        position: relative;
                        border-bottom: 1px solid #e5e5e5 !important;
                        padding-bottom: 18px;
                    }
                }

                .no-res {
                    margin-top: 20px;
                    text-align: center;
                }
            }
        }

        .right {
            width: 230px;
            float: right;
        }
    }
}
</style>