<template>
    <div style="float:left">
        <div class="orders-link-box">
            <div class="link-group">
                <p class="title"><a href="https://www.meituan.com/account/userinfo/">我的美团</a></p>
                <p class="title"><a href="/orders/#status=0">我的订单</a></p>
                <ul class="link-ul">
                    <li><a href="/orders/#status=0">全部订单</a><i class="icon-right"></i></li>
                    <li><a href="/orders/#status=1">待付款</a><i class="icon-right"></i></li>
                    <li><a href="/orders/#status=2">待使用</a><i class="icon-right"></i></li>
                    <li><a href="/orders/#status=3">待评价</a><i class="icon-right"></i></li>
                    <li><a href="/orders/#status=4">退款/售后</a><i class="icon-right"></i></li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title"><a href="https://www.meituan.com/collections/">我的收藏</a></p>
                <ul class="link-ul">
                    <li><a href="https://www.meituan.com/collections/#tab=poi">收藏的商家</a><span class="num"></span><i
                            class="icon-right"></i></li>
                    <li><a href="https://www.meituan.com/collections/#tab=deal">收藏的团购</a><span class="num"></span><i
                            class="icon-right"></i></li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title"><a href="https://www.meituan.com/vouchers/">抵用券</a></p>
                <ul class="link-ul">
                    <li><a href="https://www.meituan.com/vouchers/#tab=available">可用券</a><span class="num"></span><i
                            class="icon-right"></i></li>
                    <li><a href="https://www.meituan.com/vouchers/#tab=unAvailable">失效券</a><span class="num"></span><i
                            class="icon-right"></i></li>
                </ul>
            </div>
            <div class="link-group">
                <p class="title"><a href="https://www.meituan.com/account/settings">个人信息</a></p>
                <ul class="link-ul">
                    <li><a href="https://www.meituan.com/account/settings">账户设置</a><span class="num"></span><i
                            class="icon-right"></i></li>
                </ul>
            </div>
        </div>
        <div class="download-app">
            <div class="qrcode-box"><img src="~/assets/images/banner/download_erweima.png" alt="下载APP">
                <p class="app-name">美团App手机版</p>
                <p class="sl"><span class="red">1元起</span><span class="gary">吃喝玩乐</span></p>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.orders-link-box {
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    width: 230px;
    padding-bottom: 20px;

    .link-group {
        font-size: 16px;
        color: #222222;
        margin: 30px 20px 0 30px;

        .title {
            margin: 12px 0;

            a {
                font-size: 16px;
                color: #222222;
                font-weight: 500;

                &:hover {
                    color: #FE8C00;
                }

            }

        }

        .link-ul {
            li {
                margin: 15px 0;

                a {
                    font-size: 14px;
                    color: #666;
                }

            }

            .num {
                color: #999999;
                margin-left: 5px;
                position: relative;
                top: 1px;
            }

            .icon-right {
                background-image: url(~/assets/images/icon/icon-right.png);
                width: 8px;
                height: 18px;
                display: block;
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: 50%;
                float: right;
            }

        }


    }

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
            margin: 0 auto;
            display: block;
        }

        p {
            text-align: center;
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
    }

    .red {
        color: #EC5330;
        margin-right: 5px;
    }

    .gary {
        color: #3F3F3F;
    }

}
</style>