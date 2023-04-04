<template>
    <div class="header-nav-site header-nav-second" style="display: none;">
        <dl class="header-jiulv header-nav-third">
            <dt>酒店旅游</dt>
            <dd><a href="https://www.meituan.com/iflight/" target="_blank">国际机票</a></dd>
            <dd><a href="https://www.meituan.com/train/" target="_blank">火车票</a></dd>
            <dd><a href="https://minsu.meituan.com/" target="_blank">民宿</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20036/" target="_blank">经济型酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20037/" target="_blank">主题酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20038/" target="_blank">商务酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20039/" target="_blank">公寓</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20040/" target="_blank">豪华酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20041/" target="_blank">客栈</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20042/" target="_blank">青年旅社</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20043/" target="_blank">度假酒店</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20044/" target="_blank">别墅</a></dd>
            <dd><a href="https://hotel.meituan.com/guangzhou/c20045/" target="_blank">农家院</a></dd>
        </dl>
        <dl class="header-meishi header-nav-third">
            <dt>吃美食</dt>
            <dd><a href="https://gz.meituan.com/meishi/c20004/" target="_blank">烤鱼</a></dd>
            <dd><a href="https://gz.meituan.com/meishi/c36/" target="_blank">特色小吃</a></dd>
            <dd><a href="https://gz.meituan.com/meishi/c54/" target="_blank">烧烤</a></dd>
            <dd><a href="https://gz.meituan.com/meishi/c40/" target="_blank">自助餐</a></dd>
            <dd><a href="https://gz.meituan.com/meishi/c17/" target="_blank">火锅</a></dd>
            <dd><a href="https://gz.meituan.com/meishi/c393/" target="_blank">代金券</a></dd>
        </dl>
        <dl class="header-movie header-nav-third">
            <dt>看电影</dt>
            <dd><a href="https://maoyan.com/films" target="_blank">热映电影</a></dd>
            <dd><a href="https://maoyan.com/cinemas" target="_blank">热门影院</a></dd>
            <dd><a href="https://maoyan.com/board" target="_blank">热映电影口碑榜</a></dd>
            <dd><a href="https://maoyan.com/board/6" target="_blank">最受期待电影</a></dd>
            <dd><a href="https://maoyan.com/board/1" target="_blank">国内票房榜</a></dd>
            <dd><a href="https://maoyan.com/board/2" target="_blank">北美票房榜</a></dd>
            <dd><a href="https://maoyan.com/board/4" target="_blank">电影排行榜</a></dd>
        </dl>
        <dl class="header-app header-nav-third">
            <dt>手机应用</dt>
            <dd><a href="https://i.meituan.com/mobile/down/meituan" target="_blank"><img class="appicon"
                        src="~assets/images/app_meituan.png" title="美团app" alt="美团app"></a></dd>
            <dd><a href="https://waimai.meituan.com/mobile/download/default" target="_blank"><img class="appicon"
                        src="~assets/images/app_waimai.png" title="外卖app" alt="外卖app"></a></dd>
            <dd><a href="https://minsu.meituan.com/app/" target="_blank"><img class="appicon"
                        src="~assets/images/app_mingsu.png" title="民宿app" alt="民宿app"></a></dd>
            <dd><a href="https://www.dianping.com/events/m/index.htm" target="_blank"><img class="appicon"
                        src="~assets/images/app_dianping.png" title="点评app" alt="点评app"></a></dd>
            <dd><a href="https://maoyan.com/app" target="_blank"><img class="appicon" src="~assets/images/app_maoyan.png"
                        title="猫眼app" alt="猫眼app"></a></dd>
        </dl>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.header-nav-site {
    width: 1200px;
    box-sizing: border-box;
    border-top-left-radius: 4px;
    padding: 30px 36px 36px 47px;

    .header-nav-third {
        float: left;
        margin-right: 47px;

        dt {
            margin-bottom: 26px;
            font-size: 14px;
            color: #222222;
            font-weight: 500;
        }

        dd {
            a {
                display: block;
                padding: 5px 0;
                color: #999;
            }
        }
    }

    .header-jiulv {
        width: 234px;

        dd {
            width: 33%;
            text-align: center;
            float: left;
        }
    }

    .header-meishi {
        width: 156px;

        dd {
            width: 50%;
            text-align: center;
            float: left;
        }
    }

    .header-movie {
        width: 90px;
    }

    .header-app {
        float: right;

        dd {
            display: inline-block;
            margin: 0 8px;
        }

        .appicon {
            width: 60px;
            height: 60px;
            border: 0;
        }
    }
}
</style>