<template>
    <div class="footer-copyright clearfix">
        <div class="footer-copyright-left">
            <p>©2023 美团版权所有 <a href="https://beian.miit.gov.cn/" style="margin-left: 20px;">京ICP证070791号</a><a
                    href="https://beian.miit.gov.cn">京ICP备10211739号-1</a></p>
            <p><a href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
                    target="_blank">广播电视节目制作经营许可证（京）字第03889号</a></p>
            <p><a href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
                    target="_blank">药品医疗器械网络信息服务备案 （京）网药械信息备字（2022）第00228号</a></p>
            <p><a href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalequipment"
                    target="_blank">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a></p>
            <p> <a href="https://portal-portm.meituan.com/webpc/protocolmanage/edilicense" target="_blank">平台EDI许可证</a></p>
            <p> </p>
        </div>
        <div class="footer-copyright-right"><a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002052" target="_blank"><img
                    class="beianicon" src="~/assets/images/beian.png">京公网安备
                11000002002052号</a>
            <div class="footer-copyright-cert"><a class="bus-license"
                    href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&amp;signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
                    title="营业执照" target="_blank"><img src="~/assets/images/zzlz.png">
                    <p>北京三快科技有限公司</p>
                </a><a class="sp-ft sp-ft--record"
                    href="https://beian.miit.gov.cn/?spm=a21bo.21814703.1997523009.40.5af911d9saMbGy#/Integrated/index"
                    title="备案信息" target="_blank">备案信息</a><a class="sp-ft sp-ft--12315" href="http://www.12315.cn/"
                    title="12315消费争议" target="_blank">12315消费争议</a></div>
        </div>
    </div>
</template>
<style lang="less" scoped>
a:hover {
    color: #FE8C00;
}

.footer-copyright {
    color: #999;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 30px;
    line-height: 1.6;

    .footer-copyright-left {
        float: left;

        a {
            margin-right: 20px;
        }
    }

    .footer-copyright-right {
        float: right;
        text-align: right;

        a {
            color: #999;
        }

        .beianicon {
            width: 15px;
            position: relative;
            top: 4px;
            left: -2px;
        }

        .footer-copyright-cert {
            text-align: left;
            padding-top: 6px;

            .bus-license {
                img {
                    float: left;
                    width: 38px;
                    height: 38px;


                }

                p {
                    float: left;
                    line-height: 38px;
                    padding: 0 5px;
                }
            }

            a.sp-ft {
                display: inline-block;
                overflow: hidden;
                text-indent: -1000px;
                height: 38px;
                background-image: url(~assets/images/footer.png);
                background-repeat: no-repeat;
                margin-right: 2px;
            }

            .sp-ft--record {
                width: 109px;
                background-position: 0 -167px;
            }

            .sp-ft--12315 {
                width: 107px;
                background-position: 0 -40px;
            }
        }
    }
}
</style>