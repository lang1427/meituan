<template>
    <section class="detail-wrap">
        <div class="content">
            <div class="breadcrumbs"><span><nuxt-link to="/">{{ lvyou_obj.cityname }}美团</nuxt-link>                 
                &gt;
                </span><span><nuxt-link to="/lvyou/page/1">{{ lvyou_obj.cityname }}景点</nuxt-link>
                </span>
            </div>
            <div class="details clearfix">
                <div class="d-left">
                    <div class="name">
                        <span><b></b>旅游安全档案</span>{{ lvyou_obj.name }}
                    </div>
                    <div class="score clearfix">
                        <div class="star-cont">
                            <el-rate v-model="score" disabled text-color="#ff9900"></el-rate>
                        </div>
                        <p>{{ lvyou_obj.avgScore }}分<span>人均￥{{ lvyou_obj.avgPrice }}</span>
                        </p>
                    </div>
                    <div class="address">
                        <amap v-show="show_map" :point="[lvyou_obj.longitude,lvyou_obj.latitude]" :width="650"/>
                        <p>地址：{{ lvyou_obj.address_desc }}<b @click="showMap"></b>
                        </p>
                        <p>电话：{{ lvyou_obj.phone }}</p>
                        <p>营业时间：{{ lvyou_obj.open_time }}</p>
                        <p>消费人次：{{ lvyou_obj.consumers }}</p>
                        <p>景点类型：{{ lvyou_obj.cateName }}</p>
                        <p>景点级别：{{ lvyou_obj.level }}</p>
                    </div>
                </div>
                <div class="d-right">
                    <div class="big">
                        <div class="imgbox" style="height: 100%; width: 100%;"><img :data-src="lvyou_obj.img_url">
                        </div>
                    </div>
                </div>
                <div><span></span></div>
            </div>
            <div class="btm-cont clearfix">
                <div class="btm-left">
                    <div class="recommend">
                        <h3>景点介绍</h3>
                        <div class="cont">{{ lvyou_obj.introduction || "暂无相关介绍" }}</div>
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
                                                    <li v-for="item in 5" :key="item"><i class="iconfont el-icon-star-on"></i></li>
                                                </ul>
                                                <ul class="stars-ul stars-light" style="width: 75.6px;">
                                                    <li v-for="item in 5" :key="item"><i class="iconfont el-icon-star-on"></i></li>
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
                                                                        data-src="http://47.93.187.37:8000/img/shaitu/54034c23d4fe013fe8181194a6b3e3491505007.jpg">
                                                                </div>
                                                                <div class="thumbnail"><img
                                                                       data-src="http://47.93.187.37:8000/img/shaitu/347419eacc636a0f96a60d9c27b14f26204043.jpg">
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
                    <guess-you-like :likes=lvyou_obj.likes></guess-you-like>
                </div>
            </div>
            <div class="near-cont">
                <h3>附近景点</h3>
                <div class="nearby">
                    <ul>
                        <li v-for="item of lvyou_obj.nearby" :key="item.id"><nuxt-link :to="'/meishi/' + item.id">
                                <div class="pic">
                                    <div class="imgbox" style="height: 100%; width: 100%;"><img :data-src="item.img_url">
                                    </div>
                                </div>
                                <p class="name truncate">{{ item.name }}</p>
                                <p class="source">
                                    <span>{{ item.avgScore }}分</span>
                                </p>
                                <p class="price"><b>￥</b>{{ item.avgPrice }}<b>起</b></p>
                            </nuxt-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import guessYouLike from "~/components/guess_you_like.vue";
import amap from '~/components/map.vue';
export default {
    components: {
        guessYouLike,
        amap
    },
    data() {
        return {
            lvyou_obj: {},
            show_map:false
        }
    },
    computed: {
        score() {
            return Number(this.lvyou_obj.avgScore)
        }
    },
    async asyncData(ctx) {
        let lvyou_id = ctx.route.params.id
        try {
            let { data } = await ctx.$axios.post(`/product/lvyou/${lvyou_id}`)
            if (data.code === 1) {
                return { lvyou_obj: data.data }
            } else if (data.code === 404) {
                return { lvyou_obj: null }
            }
        } catch (e) {
            // console.log(e)
        }

    },
    methods:{
        showMap(){
            this.show_map = !this.show_map
        }
    }
}
</script>
