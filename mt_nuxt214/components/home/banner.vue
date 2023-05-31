<template>
    <div>
        <div class="home-header-links">
            <a href="http://waimai.meituan.com" class="link waimai-link" title="美团外卖" target="_blank">美团外卖</a>
            <a href="//maoyan.com" class="link maoyan-link" title="猫眼电影" target="_blank">猫眼电影</a>
            <a href="//hotel.meituan.com" class="link hotel-link" title="美团酒店" target="_blank">美团酒店</a>
            <a href="//minsu.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nav_bar"
                class="link homestay-link" title="民宿／公寓" target="_blank">民宿／公寓</a>
            <a href="https://ecom.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mtxz" class="link merchant-link"
                title="商家入驻" target="_blank">商家入驻</a>
            <a href="//gongyi.meituan.com/" class="link gongyi-link" title="美团公益" target="_blank">美团公益</a>
        </div>
        <div class="banner-row clearfix">
            <div class="item banner-slider shadow">
                <el-carousel :interval="5000" arrow="always" height="240px">
                    <el-carousel-item v-for="item in sliderData" :key="item.href">
                        <a :href="item.href">
                            <div class="slider-img-div" :style="'background-image:' + item.imgurl"></div>
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div><a href="/xiuxianyule/" class="link" target="_blank">
                <div class="item shadow pic-1"></div>
            </a>
            <div class="item banner-logincard">
                <div style="float:left">
                    <div class="login-container">
                        <div class="default" v-if="!$store.state.user.userInfo.hasOwnProperty('id')">
                            <div class="head-img-row"><img src="~/assets/images/lazyload_avatar.png" alt="">
                            </div>
                            <p class="user-name">Hi！你好</p>
                            <nuxt-link class="btn-login mt-bg" to="/user/login">立即登录</nuxt-link>
                            <nuxt-link class="btn-login" to="/user/register">注册</nuxt-link>
                        </div>
                        <div class="default" v-else>
                            <div class="setting"><nuxt-link to="/user/settings" target="_blank">
                                    <div class="icon"><i class="iconfont el-icon-setting"></i></div>
                                </nuxt-link></div>
                            <div class="head-img-row"><nuxt-link to="/user/info" target="_blank"><img
                                        :src="$store.state.user.userInfo.avatar" alt=""></nuxt-link>
                            </div>
                            <div class="nickname-row"><nuxt-link to="/user/info" target="_blank">
                                    <p class="user-name">{{ $store.state.user.userInfo.username }}</p>
                                </nuxt-link><nuxt-link to="/user/info" target="_blank"><i
                                        class=" iconfont iconfont_level icon-lable_level_0"></i></nuxt-link></div>
                            <div class="fn-row clearfix">
                                <div class="fn-item"><nuxt-link to="/user/order" target="_blank">
                                        <div class="icon"><i class="iconfont el-icon-s-order"></i></div>
                                        <p class="fn-name">我的订单</p>
                                    </nuxt-link></div>
                                <div class="fn-item"><a href="https://www.meituan.com/collections/" target="_blank">
                                        <div class="icon"><i class="iconfont el-icon-star-on"></i></div>
                                        <p class="fn-name">我的收藏</p>
                                    </a></div>
                                <div class="fn-item"><a href="https://www.meituan.com/vouchers/" target="_blank">
                                        <div class="icon"><i class="iconfont el-icon-s-ticket"></i></div>
                                        <p class="fn-name">抵用券</p>
                                    </a></div>
                            </div>
                            <div class="fn-row clearfix">
                                <div class="fn-item"><a href="https://www.meituan.com/account/userinfo" target="_blank">
                                        <div class="icon"><i class="iconfont el-icon-money"></i></div>
                                        <p class="fn-name">余额</p>
                                    </a></div>
                                <div class="fn-item"><nuxt-link to="/user/info" target="_blank">
                                        <div class="icon"><i class="iconfont el-icon-more"></i></div>
                                        <p class="fn-name">更多</p>
                                    </nuxt-link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-row clearfix">
            <a href="//hotel.meituan.com" class="link" target="_blank">
                <div class="item pic-2 shadow"></div>
            </a>
            <a href="/jiaoyupeixun/?utm_source=MTPCmain-4" class="link" target="_blank">
                <div class="item pic-3 shadow"></div>
            </a>
            <a href="http://emis.meishi.meituan.com/merchantsSettled" class="link" target="_blank">
                <div class="item pic-4 shadow"></div>
            </a>
            <div class="item download-app">
                <div class="qrcode-box"><img src="~/assets/images/banner/download_erweima.png" alt="下载APP"></div>
                <p class="app-name">美团App手机版</p>
                <p class="sl"><span class="red">1元起</span><span class="gary">吃喝玩乐</span></p>
            </div>
        </div>
    </div>
</template>

<script>
import hotel_img from '~/assets/images/banner/hotel.jpg'
import meishi_img from '~/assets/images/banner/meishi.jpg'
import waimai_img from '~/assets/images/banner/waimai.jpg'
import maoyan_img from '~/assets/images/banner/maoyan.jpg'
import paidui_img from '~/assets/images/banner/paidui.png'

export default {
    data() {
        return {
            sliderData: [
                { href: "http://hotel.meituan.com/", imgurl: `url(${hotel_img})` },
                { href: "/meishi/", imgurl: `url(${meishi_img})` },
                { href: "http://waimai.meituan.com/", imgurl: `url(${waimai_img})` },
                { href: "http://maoyan.com/", imgurl: `url(${maoyan_img})` },
                { href: "https://paidui.meituan.com/?activity_code=169_00038142", imgurl: `url(${paidui_img})` }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.home-header-links {
    position: absolute;
    top: -45px;
    left: 20px;

    a {
        color: #222;
        font-weight: 700;
        font-size: 16px;
        margin: 0 20px;
        cursor: pointer;
        position: relative;

        &:hover {
            color: #FE8C00;
        }
    }
}

.banner-row {
    .banner-slider {
        width: 550px;
        height: 240px;

        .slider-img-div {
            width: 100%;
            height: 100%;
            display: inline-block;
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: cover;
        }
    }

    .item {
        float: left;
    }

    .shadow {
        transition: box-shadow 0.5s;
    }

    .pic-1 {
        width: 150px;
        height: 240px;
        margin-left: 10px;
        margin-right: 10px;
        background-size: 150px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #fff;
        background-image: url(~/assets/images/banner/xiuxianyule.jpg);
    }

    .login-container {
        width: 228px;
        height: 238px;
        background-color: #fff;
        border: 1px solid #e5e5e5;

        .default {
            padding-top: 30px;
            position: relative;

            .iconfont {
                font-size: 23px;
                color: #FFC300;

                &.el-icon-setting {
                    color: #666;
                }
            }

            .head-img-row {
                border-radius: 30px;
                margin: 0px auto 4px auto;

                img {
                    width: 47px;
                    height: 47px;
                    border-radius: 50%;
                    border: 4px solid #E5E5E5;
                }
            }

            .user-name {
                font-size: 16px;
                color: #222;
                text-align: center;
                font-weight: 500;
                white-space: nowrap;
                width: 6em;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 0 auto;
            }

            .btn-login {
                width: 118px;
                text-align: center;
                margin: 10px auto 15px auto;
                background: #fff;
                border: 1px solid #e5e5e5;
                border-radius: 40px;
                font-size: 14px;
                color: #333;
                transition: background-color 0.5s;
                display: block;
                line-height: 38px;

                &.mt-bg {
                    background: linear-gradient(135deg, #FFD000 0, #FFBD00 100%);
                }
            }

            .setting {
                position: absolute;
                top: 5px;
                right: 5px;

                .icon {
                    float: left;
                    margin-right: 5px;
                }
            }

            .head-img-row {
                border-radius: 30px;
                margin: 0px auto 4px auto;

                img {
                    width: 47px;
                    height: 47px;
                    border-radius: 50%;
                    border: 4px solid #E5E5E5;
                }
            }

            .nickname-row {
                position: relative;
                height: 30px;
            }

            .iconfont_level {
                font-size: 14px;
                position: relative;
                top: -20px;
                left: 55px;
            }

            .fn-row {
                padding: 0 15px;

                .fn-item {
                    width: 33.3%;
                    float: left;

                    .fn-name {
                        font-size: 12px;
                        color: #222;
                        margin: 5px 0;
                    }
                }
            }
        }
    }

    .pic-2,
    .pic-3 {
        width: 270px;
        height: 165px;
        background-size: 270px;
        background-position: 50%;
        background-repeat: no-repeat;
        margin-top: 10px;
        margin-right: 10px
    }

    .pic-2 {
        background-image: url(~/assets/images/banner/zhujiudian.png);
    }

    .pic-3 {
        background-image: url(~/assets/images/banner/jiaoyupeixun.jpg);
    }

    .pic-4 {
        width: 150px;
        height: 165px;
        margin-top: 10px;
        margin-right: 10px;
        background-size: 150px;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #fff;
        background-image: url(~/assets/images/banner/shangjiahezuo.jpg);
    }

    .download-app {
        width: 228px;
        height: 165px;
        margin-top: 10px;
        background-color: #fff;
        border: 1px solid #e5e5e5;

        .qrcode-box {
            margin: 10px auto 0 auto;

            img {
                width: 95px;
                height: 95px;
            }
        }

        .app-name {
            font-size: 16px;
            color: #222222;
            font-weight: 500;
        }

        .sl {
            font-size: 12px;
            font-weight: 500;
            margin-top: 2px;

            .red {
                color: #EC5330;
                margin-right: 5px;
            }

            .gary {
                color: #3f3f3f;
            }
        }
    }
}
</style>