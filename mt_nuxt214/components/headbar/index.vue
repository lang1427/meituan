<template>
    <header class="com-header">
        <div class="header-bar">
            <div class="header-content clearfix">
                <div class="header-bar-position" style="display: block;">
                    <span class="header-icon el-icon-location-information"></span>
                    <span class="current-city">广州</span>
                    <a class="change-city" href="https://www.meituan.com/changecity/">切换城市</a>
                    <div class="near-citys">[<a class="city-guess" href="https://fs.meituan.com">佛山</a><a class="city-guess"
                            href="https://sd.meituan.com">顺德</a><a class="city-guess" href="https://ns.meituan.com">南沙</a>]
                    </div>
                    <div class="user-entry" style="display: inline-block;">
                        <nuxt-link class="growth-entry user-up" to="/user/login">立即登录</nuxt-link>
                        <nuxt-link class="extra-entry" to="/user/register">注册</nuxt-link>
                    </div>
                </div>
                <nav class="header-bar-nav">
                    <ul class="header-nav-first">
                        <li class="has-child" @mouseenter="navEnter($event)" @mouseleave="navLeave($event)">
                            <nuxt-link rel="nofollow" :to="mt_user.to" target="_blank">{{ mt_user.name }}</nuxt-link>
                            <ul class="header-nav-my header-nav-second">
                                <li v-for="item of mt_user.children" :key="item.to">
                                    <nuxt-link rel="nofollow" :to="item.to" target="_blank">{{ item.name }}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li><a href="https://i.meituan.com/mobile/down/meituan" target="_blank">手机App</a>
                        </li>
                        <li class="has-child" @mouseenter="navEnter($event)" @mouseleave="navLeave($event)">商家中心
                            <merchant />
                        </li>
                        <li class="has-child" @mouseenter="navEnter($event)" @mouseleave="navLeave($event)">美团规则
                            <ul class="header-nav-my header-nav-second">
                                <li v-for="item of mt_rule" :key="item.to">
                                    <nuxt-link rel="nofollow" :to="item.to" target="_blank">{{ item.name }}</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li class="has-child" @mouseenter="navEnter($event)" @mouseleave="navLeave($event)">网站导航
                            <navsite />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-content clearfix">
            <div class="header-title-module">
                <div class="header-title"><nuxt-link to="/"><img src="~assets/images/logo.png" alt="美团"></nuxt-link></div>
            </div>
            <search />
        </div>
    </header>
</template>
<script>

import navsite from './children/nav_site.vue'
import merchant from './children/nav_merchant.vue'
import search from './children/search.vue'

import { mt_rule_Mixin } from '~/assets/js/mixins.js'

export default {
    components: {
        navsite,
        merchant,
        search
    },
    mixins: [mt_rule_Mixin],
    data() {
        return {
            mt_user: {
                "to": "https://www.meituan.com/account/userinfo/",
                "name": "我的美团",
                "children": [
                    { "to": "https://www.meituan.com/orders/", name: "我的订单" },
                    { "to": "https://www.meituan.com/collections/", name: "我的收藏" },
                    { "to": "https://www.meituan.com/vouchers/", name: "抵用券" },
                    { "to": "https://www.meituan.com/account/settings", name: "账户设置" }
                ]
            }
        }
    },
    methods: {
        navEnter(event) {
            event.target.lastChild.style = "display:block;"
        },
        navLeave(event) {
            event.target.lastChild.style = "display:none;"
        }
    },
    mounted() {

    }
}
</script>
<style lang="less">
.com-header {
    background: #fff;
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.10);

    .clearfix:after {
        content: " ";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
    }

    .header-bar {
        background: #F8F8F8;
        width: 100%;
        font-size: 12px;
        color: #999;
        height: 40px;

        .has-child:hover {
            color: #FE8C00;
            background-color: #fff;
            border-color: #E5E5E5;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
        }

        .header-nav-my {
            width: 100%;

            a {
                line-height: 35px;
            }
        }

        .header-nav-second {
            position: absolute;
            border: 1px solid #E5E5E5;
            background: #fff;
            text-align: center;
            z-index: 1000;
            right: -1px;
            top: 95%;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            box-sizing: content-box;
            display: none;

            &:after {
                content: "";
                background: #fff;
                width: 76px;
                height: 3px;
                position: absolute;
                top: -2px;
                right: 0;
            }
        }

        .header-content {
            width: 1190px;
            margin: 0 auto;

            .header-bar-position {
                display: none;
                float: left;
                padding-top: 12px;

                .header-icon {
                    font-size: 12px;
                }

                .current-city {
                    color: #666;
                }

                .change-city {
                    background: #F4F4F4;
                    border: 1px solid #E5E5E5;
                    border-radius: 2px;
                    color: #666;
                    margin: 0 4px;
                    padding: 0 2px;

                    &:hover {
                        color: #FE8C00
                    }
                }

                .near-citys {
                    display: inline-block;

                    .city-guess {
                        margin: 0 4px;

                        &:hover {
                            color: #FE8C00;
                        }
                    }
                }

                .user-entry {
                    display: none;
                    margin-left: 15px;

                    .user-up {
                        color: #FE8C00;
                    }

                    .extra-entry:hover {
                        color: #FE8C00;
                    }

                    a {
                        margin-left: 10px;
                    }
                }
            }

            .header-bar-nav {
                float: right;

                .header-nav-first>li {
                    float: left;
                    position: relative;
                    height: 40px;
                    padding: 12px 14px;
                    box-sizing: border-box;
                    border-left: 1px solid transparent;
                    border-right: 1px solid transparent;

                    &:hover {
                        color: #FE8C00;
                    }

                    a {
                        display: block;

                        &:hover {
                            color: #FE8C00;
                        }
                    }
                }
            }
        }
    }

    .header-content {
        width: 1190px;
        margin: 0 auto;
        padding-bottom: 35px;

        .header-title-module {
            float: left;
            padding-top: 28px;
            padding-right: 60px;
            padding-bottom: 40px;
            font-size: 16px;
            min-width: 220px;
            height: 54px;
            box-sizing: content-box;
            vertical-align: sub;

            .header-title {
                margin-left: 0;
                margin-top: 0;
                display: inline-block;

                img {
                    width: 126px;
                    height: 46px;
                    border: 0;
                }
            }
        }
    }

}
</style>