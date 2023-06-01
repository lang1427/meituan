<template>
    <div class="page">
        <div class="userexinfo-container">
            <div class="clearfix">
                <user_menu></user_menu>
                <div class="userinfo-box">
                    <div class="my-page">
                        <div class="user-info-box">
                            <div class="user-info">
                                <div class="head-img"><nuxt-link to="/user/settings" target="_blank"><img
                                            :src="$store.state.user.userInfo.avatar" alt=""></nuxt-link>
                                </div>
                                <div class="nick-name">
                                    <nuxt-link to="/user/settings" target="_blank">
                                        <p class="nick-name-txt">{{ $store.state.user.userInfo.username }}<i
                                                class=" levelIconNew iconfont_level icon-new-level_1"></i></p>
                                    </nuxt-link>
                                    <p class="user-money">我的余额：￥0 · <a
                                            href="https://npay.meituan.com/resource/cashier/recharge-card.html"
                                            target="_blank">充值卡充值</a></p>
                                </div>
                                <nuxt-link to="/user/settings" target="_blank" class="user-setting">个人信息设置 &gt;</nuxt-link>
                            </div>
                            <div class="userfn-ls">
                                <ul class="userfn-ul clearfix">
                                    <li><nuxt-link to="/user/order#status=0"><i
                                                class="icon-userinfo el-icon-s-order"></i><span>全部订单</span></nuxt-link></li>
                                    <li><nuxt-link to="/user/order#status=1"><i
                                                class="icon-userinfo el-icon-s-finance"></i><span>待付款</span></nuxt-link>
                                    </li>
                                    <li><nuxt-link to="/user/order#status=2"><i
                                                class="icon-userinfo el-icon-s-ticket"></i><span>待使用</span></nuxt-link></li>
                                    <li><nuxt-link to="/user/order#status=3"><i
                                                class="icon-userinfo el-icon-s-comment"></i><span>待评论</span></nuxt-link>
                                    </li>
                                    <li><nuxt-link to="/user/order#status=4"><i
                                                class="icon-userinfo el-icon-money"></i><span>退款/售后</span></nuxt-link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="recommend-list clearfix">
                            <div class="list-head">
                                <p>猜你喜欢<b>为您甄选最合适的</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import user_menu from "~/components/user_menu.vue";
export default {
    middleware: 'authenticated',
    components: {
        user_menu
    }
}
</script>
<style lang="less" scoped>
.page .userexinfo-container {
    margin: 20px auto;
    width: 1190px;
}

.page .userexinfo-container .com-footer {
    margin-top: 40px;
}

.page .userexinfo-container .userinfo-box {
    float: right;
}

.user-info-box {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.10);
    border-radius: 4px;

    .user-info {
        width: 948px;
        height: 209px;
        background: #FFD000;
        background-image: linear-gradient(to bottom right, #FFD000, #FFBD00);
        border-radius: 4px 4px 0 0;

        .head-img {
            width: 110px;
            height: 110px;
            border: 10px solid rgba(248, 248, 248, 0.5);
            border-radius: 100%;
            position: relative;
            float: left;
            top: 38px;
            left: 30px;
            box-sizing: content-box;

            img {
                height: 100%;
                width: 100%;
                border-radius: 100%;
                box-shadow: 0 3px 7px 0 rgba(189, 92, 0, 0.53);
                border: 0px;
            }

        }

        .nick-name {
            float: left;
            color: #222222;
            position: relative;
            left: 51px;
            top: 70px;
            font-weight: 500;

            .nick-name-txt {
                font-size: 26px;
                margin-bottom: 5px;
                color: #222222;
            }

            .user-money {
                font-size: 14px;
                font-weight: 400;

                a {
                    color: #222222;
                }

            }

            .iconfont_level {
                margin-left: 10px;
                font-size: 15px;
                position: relative;
                top: -3px;
                background: #fff;
                border-radius: 2px;
            }


        }

        .user-setting {
            color: #222222;
            float: right;
            font-size: 14px;
            position: relative;
            left: -30px;
            top: 90px;
        }

    }

    .userfn-ls {
        width: 100%;
        height: 110px;
        background: #fff;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;

        .userfn-ul {
            position: relative;
            top: 36px;
            width: 850px;
            margin-left: 80px;

            li {
                float: left;
                width: 170px;
                position: relative;

                a {
                    font-size: 14px;
                    color: #666666;

                    .icon-userinfo {
                        font-size: 32px;
                    }

                    .el-icon-s-order {
                        background: linear-gradient(to bottom right, #FFA24B, #FD7F3A);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .el-icon-s-finance {
                        background: linear-gradient(to bottom right, #FFA24B, #FD7F3A);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .el-icon-s-ticket {
                        background: linear-gradient(to bottom right, #FFA24B, #FD7F3A);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .el-icon-s-comment {
                        background: linear-gradient(to bottom right, #FFA24B, #FD7F3A);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    .el-icon-money {
                        background: linear-gradient(to bottom right, #FFA24B, #FD7F3A);
                        -webkit-background-clip: text;
                        background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-size: 36px;
                    }

                    .num-refund {
                        top: -9px !important;
                        left: 22px !important;
                    }

                    span {
                        line-height: 36px;
                        text-align: center;
                        display: inline-block;
                        position: relative;
                        top: -6px;
                        left: 16px;
                    }

                    .num {
                        background: #FF4A4A;
                        border: 2px solid #FFFFFF;
                        border-radius: 42px;
                        font-size: 12px;
                        color: #FFFFFF;
                        line-height: 12px;
                        position: absolute;
                        top: -12px;
                        left: 25px;
                        padding: 2px 6px;
                    }

                }

            }

        }

    }
}

.recommend-list {
    width: 928px;
    background: #fff;
    margin-top: 20px;
    padding: 20px 10px;
    border-radius: 4px;
    border: 1px solid #e5e5e5;

    .list-head {
        margin-left: 20px;
        margin-bottom: 10px;

        p {
            font-size: 20px;
            color: #222222;
            font-weight: 500;

            b {
                font-size: 14px;
                color: #666;
                margin-left: 10px;
                font-weight: 400;
            }

            a {
                font-size: 14px;
                color: #222222;
                display: block;
                font-weight: 400;
                float: right;
                padding-right: 20px;

                .icon-btn_right {
                    font-size: 12px;
                    color: #444;
                    font-weight: 200;
                    margin-left: 2px;
                    text-align: center;
                }

            }

        }

    }

    .recommend-item-box {
        width: 212px;
        display: block;
        float: left;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #fff;
        transition: background-color 0.5s;

        &:hover {
            background-color: #f4f4f4;
            transition: background-color 0.5s;
        }

        .desc-line {
            min-height: 18px;
            padding-top: 4px;

            .desc {
                margin: 0 !important;
            }

        }

        .title {
            font-size: 16px;
            line-height: 22px;
            width: 100%;
            height: 22px;
            overflow: hidden;
        }

        .info-box {
            min-height: 98px;
        }

    }

}
</style>