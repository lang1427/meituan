<template>
    <div class="page">
        <div class="orders-container">
            <user_menu></user_menu>
            <div class="orders-box clearfix">
                <div class="orders">
                    <div class="orders-head">
                        <ul class="orders-ul clearfix">
                            <li class="active">全部订单</li>
                            <li class="">待付款</li>
                            <li class="">待使用</li>
                            <li class="">待评价<span class="num">10</span></li>
                            <li class="">退款/售后</li>
                        </ul>
                    </div>
                    <div class="orders-body">
                        <div>
                            <div class="order-item clearfix">
                                <div class="order-img"><a href="https://www.meituan.com/order/view/4917957575457151746/"
                                        class="link" target="_blank">
                                        <div><img
                                                src="//p0.meituan.net/deal/886f6e992fa7a93dd9d32239fd7063021369617.png@0_0_1151_698a|388h_640w_2e_90Q|90w_90h_1e_1c"
                                                class="image"></div>
                                    </a></div>
                                <div class="order-info">
                                    <div class="info-box"><a href="https://www.meituan.com/order/view/4917957575457151746/"
                                            class="link" target="_blank">
                                            <p class="order-title">魏小胖东北烧烤城•全羊•小龙虾4-6人餐</p>
                                        </a>
                                        <p class="info">下单时间: 2023-04-07 19:46</p>
                                        <p class="info">数量: 1</p>
                                    </div>
                                </div>
                                <div class="order-price">实付: ￥299</div>
                                <div class="order-status">待评价</div>
                                <div class="order-btn"></div>
                            </div>
                        </div>
                        <div>
                            <div class="order-item clearfix">
                                <div class="order-img"><a href="http://maoyan.com/order/detail/22862150453/" class="link"
                                        target="_blank">
                                        <div><img
                                                src="//p0.meituan.net/movie/86589f4b2a96a7b95b84c822cc479ec73461207.jpg@90w_90h_1e_1c"
                                                class="image"></div>
                                    </a></div>
                                <div class="order-info">
                                    <div class="info-box"><a href="http://maoyan.com/order/detail/22862150453/" class="link"
                                            target="_blank">
                                            <p class="order-title">长津湖之水门桥</p>
                                        </a>
                                        <p class="info">影院：定南华夏国际影城</p>
                                        <p class="info">场次：2022-02-01 18:55</p>
                                        <p class="info">数量：2张</p>
                                    </div>
                                </div>
                                <div class="order-price">总价：96元</div>
                                <div class="order-status">已完成</div>
                                <div class="order-btn"></div>
                            </div>
                        </div>
                        <div>
                            <div class="order-item clearfix">
                                <div class="order-img"><a href="http://maoyan.com/order/detail/22428308033/" class="link"
                                        target="_blank">
                                        <div><img
                                                src="//p1.meituan.net/moviemachine/fdd380fb2f7f0f1742f9f7c8ae7c5fec7189073.jpg@90w_90h_1e_1c"
                                                class="image"></div>
                                    </a></div>
                                <div class="order-info">
                                    <div class="info-box"><a href="http://maoyan.com/order/detail/22428308033/" class="link"
                                            target="_blank">
                                            <p class="order-title">速度与激情9</p>
                                        </a>
                                        <p class="info">影院：艺达国际影城（天河棠下店）</p>
                                        <p class="info">场次：2021-05-21 19:20</p>
                                        <p class="info">数量：2张</p>
                                    </div>
                                </div>
                                <div class="order-price">总价：59.8元</div>
                                <div class="order-status">已完成</div>
                                <div class="order-btn"></div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-box"><a class="left-arrow el-icon-d-arrow-left"></a><a
                            class="right-arrow el-icon-d-arrow-right"></a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import user_menu from "~/components/user_menu.vue";
export default {
    components: {
        user_menu
    }
}
</script>
<style lang="less" scoped>
.page {
    .orders-container {
        margin: 20px auto;
        width: 1190px;

        .orders-box {
            margin-bottom: 90px;

            .orders {
                width: 908px;
                background: #FFFFFF;
                border: 1px solid #E5E5E5;
                border-radius: 4px;
                padding: 20px 20px 0 20px;
                float: right;
                position: relative;

                .category-box {
                    font-size: 14px;
                    margin-left: 14px;
                    margin-bottom: 15px;

                    .cate-left {
                        float: left;
                    }

                    .cate-right {
                        float: left;
                        margin-left: 25px;

                        ul {
                            max-width: 700px;

                            li {
                                float: left;
                                width: 95px;
                            }

                        }

                    }

                    .title {
                        font-weight: 500;
                        color: #333;
                        margin-right: 40px;
                    }

                    .cate-item {
                        color: #666;
                        display: inline-block;
                        padding: 0 10px;
                        text-align: center;
                        line-height: 22px;
                        margin: 5px 0;
                        cursor: pointer;
                    }

                    .active {
                        background: #13D1BE;
                        border-radius: 100px;
                        color: #fff;
                    }

                }

                .orders-head {
                    .orders-ul {
                        margin-top: 10px;

                        li {
                            font-size: 20px;
                            color: #222;
                            line-height: 26px;
                            float: left;
                            width: 105px;
                            text-align: center;
                            height: 38px;
                            margin-right: 25px;
                            font-weight: 500;
                            cursor: pointer;

                            .num {
                                color: #999999;
                                margin-left: 5px;
                            }

                        }

                        .active {
                            border-bottom: 2px solid #ffc300;

                            .num {
                                font-weight: 500;
                                color: #222222;
                            }

                        }

                    }
                }

            }

            .order-item {
                border-top: 1px solid #E5E5E5;
                padding: 20px 0;

                .order-img {
                    float: left;

                    div {
                        width: 90px;
                        height: 90px;
                        background-image: url(~/assets/images/lazyload.png);
                        background-position: 50%;
                        background-size: cover;
                        background-repeat: no-repeat;
                    }

                    img {
                        width: 90px;
                        height: 90px;
                        border-radius: 4px;
                    }

                }

                .order-info {
                    float: left;
                    height: 90px;
                    width: 325px;
                    position: relative;

                    .info-box {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);

                        .order-title {
                            font-size: 16px;
                            color: #222222;
                            margin: 10px 0 10px 15px;
                            font-weight: 500;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            max-width: 300px;
                        }

                        .info {
                            font-size: 12px;
                            color: #666666;
                            margin-left: 15px;
                            height: 18px;
                        }

                    }

                }

                .order-price {
                    float: left;
                    font-size: 12px;
                    color: #666666;
                    line-height: 90px;
                    text-align: center;
                    width: 200px;
                }

                .order-status {
                    float: left;
                    font-size: 12px;
                    color: #333;
                    line-height: 90px;
                    text-align: center;
                    width: 100px;
                }

                .order-btn {
                    float: right;
                    height: 90px;
                    line-height: 90px;
                    text-align: center;

                    .btn-fff {
                        background: #fff;
                        border: 1px solid #E5E5E5;
                        border-radius: 100px;
                        width: 120px;
                        font-size: 14px;
                        display: inline-block;
                        color: #666;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 23px;
                    }

                    .btn-org {
                        background: #FF9900;
                        border: 1px solid #FF9900;
                        border-radius: 100px;
                        width: 120px;
                        font-size: 14px;
                        display: inline-block;
                        color: #FFFFFF;
                        line-height: 40px;
                        text-align: center;
                        margin-top: 23px;
                    }

                }

            }

            .image {
                border: 0;
            }

            .container-hide {
                visibility: hidden;
            }

            .image-error {
                display: none;
            }


            .no-order-text {
                border-top: 1px solid #E5E5E5;
                padding: 40px 0;
                text-align: center;
                font-size: 14px;
                color: #666;
            }

            .btn-box {
                position: absolute;
                left: 45%;
                margin: 20px auto;

                .right-arrow {
                    display: block;
                    width: 38px;
                    height: 38px;
                    line-height: 38px;
                    margin: 0 8px;
                    border: 1px solid #E5E5E5;
                    border-radius: 50%;
                    float: left;
                    margin: 0 10px;
                    text-align: center;
                    font-size: 16px;
                    cursor: pointer;
                    user-select: none;
                    transition: background-color .5s;
                    color: #E5E5E5;
                }

                .left-arrow {
                    display: block;
                    width: 38px;
                    height: 38px;
                    line-height: 38px;
                    margin: 0 8px;
                    border: 1px solid #E5E5E5;
                    border-radius: 50%;
                    float: left;
                    margin: 0 10px;
                    text-align: center;
                    font-size: 16px;
                    cursor: pointer;
                    user-select: none;
                    color: #E5E5E5;
                    transition: background-color .5s;
                }

            }

            .btn-active {
                color: #999;

                &:hover {
                    border: 1px solid #E5E5E5;
                    background-color: #F6F6F6;
                    transition: background-color .5s;
                }
            }
        }

    }
}

</style>