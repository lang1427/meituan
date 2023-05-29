<template>
    <section class="detail-wrap">
        <div class="content">
            <div class="breadcrumbs"><span><a href="http://gz.meituan.com/">{{ ms_obj.cityname }}美团</a>
                    &gt;
                </span><span><a href="http://gz.meituan.com/meishi/">{{ ms_obj.cityname }}美食</a>
                    &gt;
                </span><span><a href="http://gz.meituan.com/meishi/c21533/">{{ ms_obj.cityname }}地方菜系</a>
                </span></div>
            <div class="details clearfix">
                <div class="d-left">
                    <div class="name">
                        <span><b></b>食品安全档案</span>{{ ms_obj.name }}
                    </div>
                    <div class="score clearfix">
                        <div class="star-cont">
                            <el-rate v-model="score" disabled text-color="#ff9900"></el-rate>
                        </div>
                        <p>{{ ms_obj.avgScore }}分<span>人均￥{{ ms_obj.avgPrice }}</span>
                        </p>
                    </div>
                    <div class="address">
                        <p>地址：{{ ms_obj.address_desc }}<b></b>
                        </p>
                        <p>电话：{{ ms_obj.phone }}
                        </p>
                        <p>营业时间：{{ ms_obj.open_time }}</p>
                    </div>
                    <ul class="tags clearfix">
                        <li><img src="~/assets/images/tags/wifi.png">提供wifi
                        </li>
                        <li><img src="~/assets/images/tags/parking.png">停车位
                        </li>
                    </ul>
                </div>
                <div class="d-right">
                    <div class="big">
                        <div class="imgbox" style="height: 100%; width: 100%;"><img
                                src="http://47.93.187.37:8000/img/biztone/963220861_1678248182051.jpeg@380w_214h_1e_1c">
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div class="imgbox" style="height: 100%; width: 100%;"><img
                                    src="http://47.93.187.37:8000/p0/msmerchant/a7acb5235bc71d30758cda8d428b9c482974415.jpg@92w_50h_1e_1c">
                            </div>
                        </li>
                        <li>
                            <div class="imgbox" style="height: 100%; width: 100%;"><img
                                    src="http://47.93.187.37:8000/p0/msmerchant/f53254059c65dc087b02440ad1144cc01761986.jpg@92w_50h_1e_1c">
                            </div>
                        </li>
                        <li>
                            <div class="imgbox" style="height: 100%; width: 100%;"><img
                                    src="http://47.93.187.37:8000/p0/msmerchant/b6722ec9d3696fe83b98b84560a9d2303077700.jpg@92w_50h_1e_1c">
                            </div>
                        </li>
                        <li>
                            <div class="imgbox" style="height: 100%; width: 100%;"><img
                                    src="http://47.93.187.37:8000/p0/msmerchant/cded66ac7db7de5b45ef4f884ffebf8e1460569.jpg@92w_50h_1e_1c">
                            </div>
                        </li>
                    </ul>
                </div>
                <div><span></span></div>
            </div>
            <div class="btm-cont clearfix">
                <div class="btm-left">
                    <div class="recommend">
                        <h3>推荐菜</h3>
                        <div class="cont">
                            <ul class="clearfix">
                                <li v-for="item of ms_obj.topMenus">
                                    <div class="pic">
                                        <div class="imgbox" style="height: 100%; width: 100%;"><img :src="item.img_url">
                                        </div>
                                        <div class="desc"><span class="truncate">{{ item.title }}</span>
                                            <b>￥{{ item.price }}</b>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="list clearfix">
                                <span v-for="item of ms_obj.menus">{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="comment">
                        <div class="total">
                            <div class="sort"><span class="on">质量排序</span><span class="">时间排序</span></div>
                            1条网友点评
                        </div>
                        <div class="com-cont">
                            <ul class="tags clearfix">
                                <li class="">
                                    约会圣地(1)
                                </li>
                            </ul>
                            <div class="sea"><span><b class=""></b>只看有图片的评论</span></div>
                            <div>
                                <div class="list clearfix">
                                    <div class="header">
                                        <div class="imgbox" style="height: 100%; width: 100%;"><img
                                                src="https://www.dpfile.com/ugc/user/anonymous.png"></div>
                                    </div>
                                    <div class="info">
                                        <div class="name">匿名用户</div>
                                        <div class="date"><span>2023年3月25日</span></div>
                                        <div class="source">
                                            <div class="star-cont">
                                                <ul class="stars-ul">
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                </ul>
                                                <ul class="stars-ul stars-light" style="width: 75.6px;">
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                    <li><i class="iconfont el-icon-star-on"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="desc">很满意的一次就餐体验，整体评价的话我觉得：环境优雅、服务细致、口味赞、团购接待好。</div>
                                        <div class="noShowBigImg">
                                            <div>
                                                <div class="imageViewer-content com-image-viewer iconfont">
                                                    <div class="imgs-content">
                                                        <div class="header"><span
                                                                class="iconfont icon-close_icon close"></span></div>
                                                        <div class="content-arrow-imgs">
                                                            <div class="figure">
                                                                <div class="image-box"><img class="image"
                                                                        src="http://47.93.187.37:8000/img/shaitu/54034c23d4fe013fe8181194a6b3e3491505007.jpg"
                                                                        style="cursor: auto;"></div>
                                                                <div class="footer">
                                                                    <div class="footerCount">
                                                                        1
                                                                        /
                                                                        6
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div type="button" class="arrow right-arrow"></div>
                                                        </div>
                                                        <div class="paginatedThumbnails">
                                                            <div class="thumbnails">
                                                                <div class="thumbnail active"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/54034c23d4fe013fe8181194a6b3e3491505007.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/347419eacc636a0f96a60d9c27b14f26204043.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/8ab7ffeeb473e477d79e88453a96eccc222211.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/4c5efe0d6dc6a0709c135b3c65e796641495126.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/22e8bda13dc216d4781b660d07a6f2ad178148.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                        src="http://47.93.187.37:8000/img/shaitu/42d2f57e729ad1b71bce088e44fe97e0133554.jpg">
                                                                </div>
                                                            </div>
                                                            <div type="button" class="arrow right-arrow"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="like-cont">
                                            <div class="like"><b></b><span>赞</span></div>
                                        </div>
                                        <div class="line"></div>
                                    </div>
                                </div>
                                <div class="mt-pagination">更多评价请前往美团APP查看</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btm-right">
                    <div class="guess-you-like">
                        <h4>猜你喜欢</h4>
                        <ul>
                            <li v-for="item of ms_obj.likes"><nuxt-link :to="'/meishi/' + item.id">
                                    <div class="pic">
                                        <div class="imgbox" style="height: 100%; width: 100%;"><img :src="item.img_url">
                                        </div>
                                    </div>
                                    <p class="name">{{ item.name }}</p>
                                    <p class="desc">{{ item.address_desc }}</p>
                                    <p class="price"><b>￥</b>{{ item.avgPrice }}</p>
                                </nuxt-link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="near-cont">
                <h3>附近商家</h3>
                <div class="nearby">
                    <ul>
                        <li v-for="item of ms_obj.nearby"><nuxt-link :to="'/meishi/' + item.id">
                                <div class="pic">
                                    <div class="imgbox" style="height: 100%; width: 100%;"><img :src="item.img_url">
                                    </div>
                                </div>
                                <p class="name truncate">{{ item.name }}</p>
                                <p class="source">
                                    <span>{{ item.avgScore }}分</span>
                                </p>
                                <p class="source desc"></p>
                                <p class="price"><b>￥</b>{{ item.avgPrice }}<b>起</b></p>
                            </nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            ms_obj: {}
        }
    },
    computed:{
        score(){
            return Number(this.ms_obj.avgScore)
        }
    },  
    async asyncData(ctx) {
        let meishi_id = ctx.route.params.id
        try {
            let { data } = await ctx.$axios.post(`/product/meishi/${meishi_id}`)
            if (data.code === 1) {
                return { ms_obj: data.data }
            } else if (data.code === 404) {
                return { ms_obj: null }
            }
        } catch (e) {
            // console.log(e)
        }

    }
}
</script>

<style lang="less" scoped>
.detail-wrap {
    img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .line {
        height: 1px;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }

    .com-image-viewer {
        overflow: hidden;
        cursor: pointer;
        padding-top: 10px;
        position: static;
        background: #fff;

        .imgs-content {
            width: auto;
            padding-top: 180px;
            position: relative;
            margin: 0;
            height: 100%;
            overflow: hidden;
        }
    }
}

.el-icon-star-on {
    font-size: 12px;
}

.imgbox {
    display: block;
    width: auto;
    height: auto;
    background: url(~/assets/images/meituan.png) center center no-repeat #e0e0e0;
    background-size: 60% auto;
}

.star-cont {
    display: inline-block;
    width: 128px;
    height: 24px;
    position: relative;

    .stars-ul {
        li {
            display: inline-block;
        }
    }

    .stars-light {
        color: #F90;
        position: absolute;
        top: 0;
        overflow: hidden;
        height: 20px;
    }
}

.content {
    width: 1190px;
    margin: auto;

    a {
        color: #222;
    }

    .breadcrumbs {
        font-size: 12px;
        color: #222;
        line-height: 17px;
        padding: 19px 0;
    }

    .details {
        font-size: 12px;
        color: #666;
        background-color: #fff;
        border-radius: 10px;
        padding: 20px 20px 33px 20px;
        border: 1px solid #e5e5e5;
        box-shadow: 0 5px 14px 0 rgba(0, 0, 0, .1);


        .d-left {
            float: left;
            width: 748px;
            padding-right: 20px;

            .name {
                font-size: 26px;
                line-height: 37px;

                span {
                    float: right;
                    color: #00c9b3;
                    font-size: 12px;
                    cursor: pointer;

                    b {
                        background-image: url(~/assets/images/safe.png);
                        width: 15px;
                        height: 18px;
                        background-size: 100% 100%;
                        display: inline-block;
                        margin-right: 6px;
                        vertical-align: middle;
                        margin-top: -3px;
                    }
                }
            }

            .score {
                font-size: 14px;
                height: 14px;
                margin: 6px 0 17px 0;

                p {
                    display: inline-block;
                    margin-left: 6px;
                }
            }

            .address {
                border-top: 1px solid #e5e5e5;
                border-bottom: 1px solid #e5e5e5;
                padding: 16px 0 11px 0;

                p {
                    font-size: 14px;
                    line-height: 20px;
                    margin-bottom: 10px;

                    b {
                        background-image: url(~/assets/images/meishi-web.png);
                        width: 14px;
                        height: 14px;
                        display: inline-block;
                        background-position-x: -28px;
                        background-size: auto 14px;
                        vertical-align: -2px;
                        display: inline-block;
                        margin-left: 6px;
                        vertical-align: middle;
                        margin-top: -3px;
                        cursor: pointer;
                    }
                }
            }

            .tags {
                padding-top: 20px;

                li {
                    float: left;
                    margin-right: 16px;
                    line-height: 17px;

                    img {
                        display: block;
                        margin: auto;
                        margin-bottom: 11px;
                        width: 24px;
                        height: 24px;
                        border-radius: 0;
                    }
                }
            }
        }

        .d-right {
            float: left;
            width: 380px;
            overflow: hidden;
            cursor: pointer;

            .imgbox {
                display: block;
                width: auto;
                height: auto;
                background: url(~/assets/images/meituan.png) center center no-repeat #e0e0e0;
                background-size: 60% auto;
            }

            .big {
                height: 214px;
                width: 100%;

            }

            ul {
                width: 385px;
                padding-top: 10px;

                li {
                    float: left;
                    width: 92px;
                    margin-right: 4px;
                    height: 50px;
                }
            }
        }
    }

    .btm-cont {
        color: #222;
        padding-top: 40px;

        h3 {
            font-size: 20px;
            line-height: 26px;
            margin-bottom: 8px;
        }

        .btm-left {
            width: 950px;
            float: left;

            .recommend {
                overflow: hidden;
                margin-bottom: 40px;

                .list {
                    padding: 25px 0 0 6px;

                    span {
                        display: block;
                        float: left;
                        margin: 0 20px 19px 0;
                        font-size: 16px;
                        line-height: 20px;
                        color: #333;
                    }
                }

                ul {
                    width: 910px;

                    li {
                        float: left;
                        width: 130px;
                        margin-right: 20px;

                        .pic {
                            position: relative;
                            height: 130px;
                            border-radius: 4px;

                            .desc {
                                font-size: 14px;
                                width: 100%;
                                background: rgba(0, 0, 0, .3);
                                padding: 8px 0;
                                text-align: center;
                                color: #fff;
                                position: absolute;
                                bottom: 0;
                                left: 0;

                                span {
                                    vertical-align: bottom;
                                    max-width: 60%;
                                    display: inline-block;
                                }
                            }
                        }
                    }
                }

                .cont {
                    border: 1px solid #e5e5e5;
                    background-color: #fff;
                    padding: 33px 32px 26px 32px;
                    border-radius: 4px;
                }
            }

            .comment {
                margin-bottom: 40px;

                .total {
                    font-size: 20px;
                    line-height: 26px;

                    .sort {
                        cursor: pointer;
                        float: right;
                        font-size: 12px;
                        color: #999;

                        .on {
                            color: #00c9b3;
                        }

                        span {
                            font-size: 12px;
                            margin-left: 20px;
                        }
                    }
                }

                .com-cont {
                    margin-top: 8px;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 4px;
                    padding: 0 20px 40px 20px;
                    color: #666;

                    .tags {
                        padding-top: 15px;

                        li {
                            float: left;
                            font-size: 14px;
                            line-height: 34px;
                            padding: 0 10px;
                            border: 1px solid #e5e5e5;
                            border-radius: 2px;
                            margin: 0 10px 10px 0;
                            cursor: pointer;
                        }
                    }

                    .sea {
                        margin-top: 22px;
                        font-size: 14px;

                        span {
                            display: inline-block;
                            line-height: 20px;
                            cursor: pointer;

                            b {
                                width: 15px;
                                height: 15px;
                                border-radius: 2px;
                                border: 1px solid #ccc;
                                display: inline-block;
                                vertical-align: text-bottom;
                                margin-right: 6px;
                            }
                        }
                    }

                    .list {
                        padding: 30px 0 0 0;

                        .header {
                            width: 60px;
                            height: 60px;
                            border-radius: 50%;
                            float: left;

                            .imgbox {
                                border-radius: 50%;
                            }

                            .close {
                                width: 30px;
                                height: 30px;
                                font-size: 30px;
                                cursor: pointer;
                                display: inline-block;
                                background: none;
                                color: #fff;
                                border: 0;
                            }
                        }

                        .info {
                            float: left;
                            padding-left: 20px;
                            width: 828px;

                            .name {
                                font-size: 16px;
                                color: #222;
                                line-height: 22px;
                                margin-bottom: 1px;
                            }

                            .date {
                                font-size: 12px;
                                line-height: 20px;
                                color: #999;

                                span {
                                    float: right;
                                }
                            }

                            .source {
                                line-height: 14px;
                                margin-top: 3px;
                                height: 16px;
                                font-size: 11px;
                            }

                            .desc {
                                font-size: 14px;
                                line-height: 20px;
                                padding-top: 13px;
                            }

                            .noShowBigImg {
                                .content-arrow-imgs {
                                    width: 460px;
                                    display: none;
                                    position: relative;

                                    .figure {
                                        width: 460px;
                                        margin: auto;
                                        position: relative;
                                        overflow: hidden;

                                        .image-box {
                                            width: 100%;
                                            height: 100%;
                                        }

                                        .footer {
                                            position: absolute;
                                            bottom: 0;
                                            width: 100%;
                                            height: 30px;
                                            background: rgba(0, 0, 0, .4);

                                            .footerCount {
                                                line-height: 30px;
                                                color: #fff;
                                                font-size: 14px;
                                                padding-left: 12px;
                                            }
                                        }
                                    }
                                }

                                .paginatedThumbnails {
                                    width: 828px;
                                    height: 160px;
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    bottom: 20px;
                                    overflow: hidden;

                                    .thumbnails {
                                        position: relative;
                                        width: 10000px;

                                        .active {
                                            border-radius: 0;
                                            border-color: #fff !important;
                                        }

                                        .thumbnail {
                                            width: 160px;
                                            height: 160px;
                                            margin-right: 0;
                                            border: 10px solid #fff;
                                            cursor: pointer;
                                            display: inline-block;

                                            img {
                                                width: 140px;
                                                height: 140px;
                                            }
                                        }
                                    }

                                    .arrow {
                                        top: 10px;
                                        height: 140px;
                                        cursor: pointer;
                                    }

                                    .right-arrow {
                                        right: 0px;
                                        // background-image: url(../../../assets/da750bb66f7ebbc8.png);
                                        background-size: 100% 100%;
                                    }
                                }
                            }

                            .like-cont {
                                text-align: right;
                                margin: 17px 0 16px 0;

                                .like {
                                    display: inline-block;
                                    cursor: pointer;
                                    font-size: 12px;
                                    color: #666;

                                    b {
                                        background-image: url(~/assets/images/like.png);
                                        background-size: 100% 100%;
                                        width: 15px;
                                        height: 16px;
                                        display: inline-block;
                                        margin-right: 6px;
                                        vertical-align: text-bottom;
                                    }

                                    span {
                                        vertical-align: middle;
                                    }
                                }
                            }
                        }
                    }

                    .mt-pagination {
                        text-align: center;
                        margin-top: 40px;
                    }
                }
            }
        }

        .btm-right {
            width: 230px;
            float: right;
            padding-top: 34px;

            .guess-you-like {
                border: 1px solid #e5e5e5;
                border-radius: 4px;
                background-color: #fff;
                padding: 16px 20px 0 20px;

                h4 {
                    font-size: 16px;
                    line-height: 22px;
                    margin: 0 0 12px 0;
                    color: #333;
                }

                ul {
                    li {
                        margin-bottom: 20px;

                        a {
                            display: block;
                            text-decoration: none;
                        }

                        .pic {
                            height: 106px;
                            border-radius: 4px;
                        }

                        .name {
                            font-size: 14px;
                            line-height: 20px;
                            color: #222;
                            margin: 10px 0 4px 0;
                        }

                        .desc {
                            font-size: 12px;
                            line-height: 17px;
                            color: #999;
                        }

                        .price {
                            font-size: 22px;
                            color: #ff6600;
                            line-height: 27px;

                            b {
                                font-weight: normal;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }

    }

    .near-cont {
        h3 {
            font-size: 20px;
            line-height: 26px;
            color: #333;
        }

        .nearby {
            margin-top: 8px;
            background: #fff;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            padding: 20px;
            padding-bottom: 0;
            overflow: hidden;
            color: #999;

            ul {
                width: 1200px;

                li {
                    height: 241px;
                    overflow: hidden;
                    float: left;
                    width: 214px;
                    margin: 0 20px 22px 0;

                    .pic {
                        height: 120px;
                        border-radius: 4px;
                    }

                    .name {
                        font-size: 16px;
                        line-height: 22px;
                        color: #222;
                        margin: 10px 0 6px 0;
                    }

                    .source {
                        color: #999;
                        font-size: 12px;
                        line-height: 17px;

                        >span {
                            margin-right: 4px;
                        }
                    }

                    .desc {
                        margin: 1px 0 3px;
                        min-height: 33px;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                    }

                    .price {
                        font-size: 22px;
                        line-height: 27px;
                        color: #ff6600;

                        b {
                            font-weight: normal;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>