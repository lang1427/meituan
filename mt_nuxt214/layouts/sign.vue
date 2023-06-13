<template>
    <div style="background: #fff;">
        <header class="header cf">
            <a class="site-logo" href="/">美团网</a>
        </header>
        <nuxt />
        <footer class="footer">
            <div class="site-info-nav cf">
                <ul>
                    <li class="first"><a rel="nofollow" href="javascript:;">关于美团</a></li>
                    <li><a rel="nofollow" href="javascript:;">加入我们</a></li>
                    <li><a rel="nofollow" href="javascript:;">商家入驻</a></li>
                    <li><a rel="nofollow" href="javascript:;">帮助中心</a></li>
                    <li class="last"><a href="javascript:;">美团手机版</a></li>
                </ul>
            </div>
            <div class="copyright">
                <p>
                    ©<span>2023</span>
                    <a href="javascript:;">美团版权所有</a>

                    <a href="javascript:;">京xxx证xxxxxx号</a>
                    京公网安备xxxxxxxxxxxxxx号
                </p>
            </div>
        </footer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            sign_key:"4567631346997846",
            sign_iv:"0000000000123456"
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    position: relative;
    width: 980px;
    height: auto;
    margin: 40px auto 30px;

    .site-logo {
        margin: 0;
        background-image: url(~assets/images/logo.png);
        background-repeat: no-repeat;
        float: left;
        display: block;
        display: inline;
        text-indent: -9999px;
        overflow: hidden;
        background-position: 0 !important;
        background-size: contain !important;
        width: 130px;
        height: 47px;
    }
}

.footer {
    margin: 0 auto 30px;
    clear: both;
    width: 980px;
    font-size: 10px;
    color: #999;

    .site-info-nav {
        margin-bottom: 20px;
        padding: 12px 0;
        border-top: 1px solid #EEE;
        border-bottom: 1px solid #EEE;

        ul {
            float: left;
            width: 594px;
            color: #EEE;
            zoom: 1;

            .first {
                padding-left: 0;
            }

            .last {
                border-right: none;
            }

            li {
                float: left;
                margin: 5px 0;
                padding: 0 16px;
                line-height: 14px;
                border-right: 1px solid #EEE;

                a {
                    color: #999;
                }
            }


        }
    }

    .copyright {
        text-align: left;
        clear: both;
        font-family: initial;

        p,
        a,
        span {
            color: #999;
            font-size: 12px;
        }
    }
}
</style>