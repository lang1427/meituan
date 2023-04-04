<template>
    <div class="footer-link clearfix">
        <div class="footer-column">
            <dl>
                <dt>用户帮助</dt>
                <dd v-for="item of user_help" :key="item.href">
                    <a rel="nofollow" :href="item.href" target="_blank">{{ item.name }}</a>
                </dd>
            </dl>
            <dl>
                <dt>美团服务</dt>
                <dd v-for="item of mt_server" :key="item.href">
                    <a :href="item.href" target="_blank">{{ item.name }}</a>
                </dd>
            </dl>
        </div>
        <div class="footer-column">
            <dl>
                <dt>商家合作</dt>
                <dd v-for="item of business_cooperation" :key="item.href">
                    <a rel="nofollow" :href="item.href" target="_blank">{{ item.name }}</a>
                </dd>
            </dl>
        </div>
        <div class="footer-column">
            <dl>
                <dt>合作商招募</dt>
                <dd><a rel="nofollow" href="https://mfe.waimai.meituan.com/mfepro/client-h5/#/login"
                        target="_blank">美团外卖合作商招募</a></dd>
                <dd><a rel="nofollow" href="https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd"
                        target="_blank">到店餐饮合作商招募</a></dd>
                <dd><a rel="nofollow" href="https://daili.meituan.com/dz-zhaoshang" target="_blank">到店综合业务合作商招募</a>
                </dd>
                <dd><a rel="nofollow" href="http://union.meituan.com/" target="_blank">美团联盟</a></dd>
                <dd><a rel="nofollow" href="https://wenjuan.meituan.com/survey/4332711" target="_blank">美团收银招募线上分销商</a></dd>
                <dd><a rel="nofollow" href="https://agent.meituan.com/zhaoshang?partnerSource=3"
                        target="_blank">美团收银合作商招募</a></dd>
                <dd><a rel="nofollow" href="https://zf.meituan.com?partnerSource=3" target="_blank">美团收单合作商招募</a>
                </dd>
                <dd><a rel="nofollow"
                        href="https://i.meituan.com/awp/hfe/block/index.html?cube_h=2b7f0b4afbea&amp;cube_i=97656"
                        target="_blank">美团充电宝合作商招募</a></dd>
                <dd><a rel="nofollow"
                        href="https://managergrocery.meituan.com/mall-fe-agent-activity/clues-collect.html?page_from=30"
                        target="_blank">美团优选渠道合作商招募</a></dd>
                <dd><a rel="nofollow" href="https://vss.baobaoaichi.cn/" target="_blank">美团买菜合作商招募</a></dd>
                <dd><a rel="nofollow" href="https://developer.meituan.com/hardware?source=zhuzhan"
                        target="_blank">美团硬件设备合作商招募</a></dd>
            </dl>
            <dl>
                <dt>美团规则</dt>
                <dd v-for="item of mt_rule" :key="item.name">
                    <a rel="nofollow" :href="item.to" target="_blank">{{ item.name }}</a>
                </dd>
            </dl>
        </div>
        <div class="footer-column">
            <dl>
                <dt>关注美团</dt>
                <dd><a rel="nofollow" href="http://weibo.com/meituan" target="_blank">美团新浪微博</a></dd>
            </dl>
            <dl>
                <dt>公司信息</dt>
                <dd><a rel="nofollow" href="https://about.meituan.com/" target="_blank">关于我们</a></dd>
                <dd><a rel="nofollow" href="https://about.meituan.com/investor.html" target="_blank">投资者关系</a></dd>
                <dd><a rel="nofollow" href="http://zhaopin.meituan.com/" target="_blank">加入我们</a></dd>
                <dd><a rel="nofollow" href="https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC"
                        target="_blank">商户诚信公约及管理办法</a></dd>
                <dd><a rel="nofollow" href="https://i.meituan.com/awp/ffe/insurance-website/index.html#/"
                        target="_blank">保险经纪资质</a></dd>
            </dl>
            <dl>
                <dt>廉正举报</dt>
                <dd><a rel="nofollow" href="https://jubao.meituan.com/app/home?source=1" target="_self">廉正举报平台</a>
                </dd>
            </dl>
            <dl>
                <dt>知识产权</dt>
                <dd><a rel="nofollow" href="https://ipr.meituan.com?source=1" target="_blank">知识产权维权平台</a></dd>
            </dl>
        </div>
        <div class="footer-column">
            <dl>
                <dt>消费者服务热线</dt>
                <dd>外卖消费者：<a rel="nofollow" href="tel:10109777" target="_blank">10109777</a></dd>
                <dd>猫眼消费者：<a rel="nofollow" href="tel:10105335" target="_blank">10105335</a></dd>
                <dd>其他消费者：<a rel="nofollow" href="tel:10107888" target="_blank">10107888</a></dd>
            </dl>
            <dl>
                <dt>商家服务热线</dt>
                <dd>外卖&amp;餐饮商家：<a rel="nofollow" href="tel:10105557" target="_blank">10105557</a></dd>
                <dd>休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：<a rel="nofollow" href="tel:10100107" target="_blank">10100107</a>
                </dd>
            </dl>
            <dl>
                <dt>投诉举报专区</dt>
                <dd>违法和不良信息举报电话：<a rel="nofollow" href="tel:4006018900" target="_blank">4006018900</a></dd>
                <dd>举报邮箱：<a rel="nofollow" href="mailto:tousujubao@meituan.com" target="_self">tousujubao@meituan.com</a>
                </dd>
                <dd><a rel="nofollow" href="https://www.12377.cn/" target="_blank">网上有害信息举报</a></dd>
                <dd>以上渠道均可投诉举报：<a rel="nofollow" href="" target="">互联网违法和不良信息，涉及未成年人保护、互联网算法推荐、谣言类信息等相关问题</a></dd>
            </dl>
            <dl>
                <dt><a rel="nofollow" href="https://ecom.meituan.com/bizsettle/settle/merchantsSettle"
                        target="_blank">商家自助入驻美团入口</a></dt>
            </dl>
            <dl>
                <dt><a rel="nofollow" href="https://isp.meituan.com/signup" target="_blank">供应商注册入口</a></dt>
            </dl>
        </div>
    </div>
</template>
<script>
import { mt_rule_Mixin } from '~/assets/js/mixins.js'

export default {
    mixins: [mt_rule_Mixin],
    data() {
        return {
            user_help: [
                { href: "http://www.meituan.com/help/selfservice", name: "申请退款" },
                { href: "http://www.meituan.com/help/faq", name: "常见问题" },
                { href: "https://rules-center.meituan.com/rules-detail/4", name: "用户协议" },
                { href: "https://rules-center.meituan.com/rules-detail/2", name: "隐私政策" },
                { href: "http://www.meituan.com/about/anticheat", name: "反诈骗公告" },
                { href: "https://rules-center.meituan.com/customer-rights", name: "消费者权益保障" }
            ],
            mt_server: [
                { href: "http://waimai.meituan.com/", name: "美团外卖" },
                { href: "http://hotel.meituan.com/", name: "美团酒店" },
                { href: "http://maoyan.com/", name: "猫眼电影" },
                { href: "https://peisong.meituan.com/", name: "美团配送" },
                { href: "https://www.mtyun.com/", name: "美团云" },
                { href: "http://www.dianping.com/", name: "大众点评" },
                { href: "https://minsu.meituan.com/", name: "美团民宿" },
                { href: "https://mad.meituan.com", name: "无人配送" },
                { href: "https://em.meituan.com/?channeltype=01,01,01", name: "企业用餐、企业用车、企业差旅" },
                { href: "https://developer.meituan.com/", name: "开放平台" }
            ],
            business_cooperation: [
                { href: "https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my", name: "美食商家入驻(非外卖)" },
                { href: "https://kd.meituan.com/", name: "美团外卖开店申请" },
                { href: "https://rms.meituan.com", name: "美团餐饮系统" },
                { href: "http://page.peisong.meituan.com/apply/join", name: "美团配送合作申请" },
                { href: "https://xue.meituan.com/?from=mtpc", name: "美团餐饮培训" },
                { href: "https://ruzhu.meituan.com/settle/hotel/propaganda.html", name: "酒店商家入驻" },
                { href: "https://ruzhu.meituan.com/settle/trip/pc.html", name: "境内度假商家入驻" },
                { href: "https://e.dianping.com/claimcpc/page/index?source=mt", name: "综合商家入驻" },
                { href: "https://minsu.meituan.com/about/", name: "美团民宿房东商家入驻" },
                { href: "http://pc.meituan.com/?activity_code=mtpcdb", name: "商家开票申请" },
                { href: "https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001", name: "美团智能收银机" },
                { href: "https://developer.meituan.com/?from=mtpcsw", name: "美团开放平台" },
                { href: "https://recommend-zc.meituan.com/opportunity?channel=1", name: "美团收单" },
                { href: "https://paidui.meituan.com/?activity_code=167_00038050", name: "免费使用美团排队" },
                { href: "https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html", name: "快驴进货商家合作" },
                { href: "https://shangou.meituan.com/joinin", name: "美团闪购商家入驻" },
                { href: "https://123.meituan.com?source=mtwpc", name: "合作/招聘" }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.footer-link {
    padding: 40px 45px;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;

    .footer-column {
        width: 20%;
        float: left;
    }

    dl {
        padding-bottom: 20px;
        color: #666;

        dt {
            font-size: 14px;
            font-weight: 500;
        }

        a {
            color: #666;

            &:hover {
                color: #FE8C00;
            }
        }
    }
}
</style>