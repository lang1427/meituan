<template>
    <section class="poiList-wrap clear">
        <div class="content clear">
            <div class="breadcrumbs"><span><a href="http://gz.meituan.com/">{{ cityname }}美团</a>
                    &gt;
                </span><span><a href="http://gz.meituan.com/meishi/">{{ cityname }}美食</a>
                </span>
            </div>
            <div class="left">
                <div class="filter">
                    <div class="condition">
                        <div class="cont clear">
                            <div class="classification">分类</div>
                            <div class="all on">全部</div>
                            <ul class="more clear">
                                <li v-for="item of categorys"><a class="" href="http://gz.meituan.com/meishi/c393/">{{
                                    item.name }}</a></li>
                            </ul>
                        </div>
                        <div class="cont clear">
                            <div class="classification">区域</div>
                            <div class="all on">全部</div>
                            <ul class="more clear">
                                <li v-for="item of areas"><span class="hasSub"><b>{{ item.cityname }}</b></span></li>
                            </ul>
                        </div>
                        <div class="popover">
                            <div class="arrow"></div>
                            <div class="p-content">
                                <div class="popover-content"><span></span>
                                    <ul class="clear"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="list">
                        <div>
                            <div class="tags"><span><a href="http://gz.meituan.com/meishi/" class="on">默认</a></span><span><a
                                        href="http://gz.meituan.com/meishi/price_asc/" class="">价格</a></span><span><a
                                        href="http://gz.meituan.com/meishi/rating/" class="">好评最多</a></span></div>
                            <div class="line"></div>
                        </div>
                        <ul class="list-ul">
                            <li v-for="(item, index) of  list " :class="['clear', (index != list.length - 1) ? 'btm' : '']">
                                <div class="img"><nuxt-link :to="'/meishi/' + item.id">
                                        <div class="fl-count">{{ index + 1 }}</div>
                                        <div class="imgbox" style="height: 125px; width: 220px;"><img :src="item.img_url">
                                        </div>
                                    </nuxt-link></div>
                                <div class="info"><nuxt-link :to="'/meishi/' + item.id">
                                        <h4>{{ item.name }}</h4>
                                        <div class="source clear">
                                            <div class="star-cont">
                                                <el-rate :value="Number(item.avgScore)" disabled
                                                    text-color="#ff9900"></el-rate>
                                            </div>
                                            <p>{{ item.avgScore }}分<span>{{ item.commentNum }}条评论</span>
                                            </p>
                                        </div>
                                        <p class="desc">
                                            {{ item.address_desc }}<span>人均￥{{ item.avgPrice }}</span>
                                        </p>
                                    </nuxt-link>
                                    <!-- <div class="other"><a :to="'/meishi/' + item.id">
                                            <div class="one">
                                                <h4>50元代金券1张</h4>
                                                <p><span><b class="dl">￥</b>29</span>
                                                </p>
                                            </div>
                                        </a><a :to="'/meishi/' + item.id">
                                            <div class="one">
                                                <h4>烹湘2-3人餐</h4>
                                                <p><span><b class="dl">￥</b>98</span>
                                                </p>
                                            </div>
                                        </a>
                                        <div class="more">展开<b class=""></b>
                                        </div>
                                    </div> -->
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
            <div class="right" data-reactid="140">
                <guess-you-like :likes=likes></guess-you-like>
            </div>
        </div>
    </section>
</template>

<script>
import guessYouLike from "~/components/guess_you_like.vue";
export default {
    components: {
        guessYouLike
    },
    data() {
        return {
            currentPage: Number(this.$route.params.page),
            total: 0,
            cityname: "",
            areas: [],
            categorys: [],
            list: [],
            likes: []
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$router.push('/meishi/page/' + val)
        }
    },
    async asyncData(ctx) {
        let page = ctx.route.params.page
        let city = ctx.store.state.geo.position.city.replace("市", "")
        let { data } = await ctx.$axios.post(`/product/meishi/page/${page}`, { cityname: city })
        if (data.code === 1) {
            return { list: data.list, likes: data.likes, areas: data.area, categorys: data.categorys, cityname: data.cityname, total: data.count }
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

                    .popover {
                        display: none;
                        width: 510px;
                        position: absolute;
                        top: 0px;
                        left: 00px;
                        z-index: 1000;
                        cursor: auto;
                        -webkit-user-select: text;
                        user-select: text;
                        white-space: normal;
                        font-size: 12px;
                        line-height: 1.5;
                        font-weight: 500;
                        text-align: left;
                        background: #FFF;
                        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, .1);
                        border: 1px solid #E5E5E5;
                        border-radius: 4px;

                        .arrow {
                            border-width: 5px;
                            left: 26px;
                            top: -10px;
                            position: absolute;
                            display: block;
                            width: 0;
                            height: 0;
                            border-color: transparent transparent #E5E5E5;
                            border-style: solid;

                            &:after {
                                border-width: 5px;
                                display: block;
                                width: 0;
                                height: 0;
                                border-style: solid;
                                content: '';
                                margin-top: -3px;
                                margin-left: -4px;
                                border-width: 4px;
                                border-color: transparent transparent #E5E5E5;
                                border-bottom-color: #FFF;
                            }

                        }

                        .p-content {
                            background-color: #fff;
                            background-clip: padding-box;
                            border-radius: 4px;

                            .popover-content {
                                padding: 19px 15px 9px;

                                span {
                                    color: #ccc;
                                    font-size: 16px;
                                    margin-bottom: 11px;
                                    cursor: default;
                                    display: block;
                                }

                                ul li {
                                    font-weight: 400;
                                    min-width: 120px;
                                    margin-bottom: 5px;
                                    float: left;
                                    line-height: 20px;

                                    a {
                                        padding: 0 10px;
                                        display: inline-block;
                                        color: #666;
                                        margin-left: -10px;
                                    }
                                }
                            }
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