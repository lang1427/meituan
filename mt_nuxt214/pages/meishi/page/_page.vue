<template>
    <section class="poiList-wrap clear">
        <div class="content clear">
            <div class="breadcrumbs"><span><a href="http://gz.meituan.com/">{{ cityname }}美团</a>
                    &gt;
                </span><span><a href="http://gz.meituan.com/meishi/">{{ cityname }}美食</a>
                </span>
            </div>
            <div class="left">
                <div class="filter">
                    <div class="condition">
                        <div class="cont clear">
                            <div class="classification">分类</div>
                            <div class="all on">全部</div>
                            <ul class="more clear">
                                <li v-for="item of categorys" :key="item.name"><a class="" href="http://gz.meituan.com/meishi/c393/">{{
                                    item.name }}</a></li>
                            </ul>
                        </div>
                        <div class="cont clear">
                            <div class="classification">区域</div>
                            <div class="all on">全部</div>
                            <ul class="more clear">
                                <li v-for="item of areas" :key="item.cityname"><span class="hasSub"><b>{{ item.cityname }}</b></span></li>
                            </ul>
                        </div>
                        <div class="popover">
                            <div class="arrow"></div>
                            <div class="p-content">
                                <div class="popover-content"><span></span>
                                    <ul class="clear"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="list">
                        <div>
                            <div class="tags"><span><a href="http://gz.meituan.com/meishi/" class="on">默认</a></span><span><a
                                        href="http://gz.meituan.com/meishi/price_asc/" class="">价格</a></span><span><a
                                        href="http://gz.meituan.com/meishi/rating/" class="">好评最多</a></span></div>
                            <div class="line"></div>
                        </div>
                        <ul class="list-ul">
                            <li v-for="(item, index) of list" :key="item.id" :class="['clear', (index != list.length - 1) ? 'btm' : '']">
                                <div class="img"><nuxt-link :to="'/meishi/' + item.id">
                                        <div class="fl-count">{{ index + 1 }}</div>
                                        <div class="imgbox" style="height: 125px; width: 220px;"><img :src="item.img_url">
                                        </div>
                                    </nuxt-link></div>
                                <div class="info"><nuxt-link :to="'/meishi/' + item.id">
                                        <h4>{{ item.name }}</h4>
                                        <div class="source clear">
                                            <div class="star-cont">
                                                <el-rate :value="Number(item.avgScore)" disabled
                                                    text-color="#ff9900"></el-rate>
                                            </div>
                                            <p>{{ item.avgScore }}分<span>{{ item.commentNum }}条评论</span>
                                            </p>
                                        </div>
                                        <p class="desc">
                                            {{ item.address_desc }}<span>人均￥{{ item.avgPrice }}</span>
                                        </p>
                                    </nuxt-link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-pagination">
                        <el-pagination layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"
                            :current-page.sync="currentPage" :page-size="20">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="right" data-reactid="140">
                <guess-you-like :likes=likes></guess-you-like>
            </div>
        </div>
    </section>
</template>

<script>
import guessYouLike from "~/components/guess_you_like.vue";
export default {
    components: {
        guessYouLike
    },
    data() {
        return {
            currentPage: Number(this.$route.params.page),
            total: 0,
            cityname: "",
            areas: [],
            categorys: [],
            list: [],
            likes: []
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$router.push('/meishi/page/' + val)
        }
    },
    async asyncData(ctx) {
        let page = ctx.route.params.page
        let city = ctx.store.state.geo.position.city.replace("市", "")
        let { data } = await ctx.$axios.post(`/product/meishi/page/${page}`, { cityname: city })
        if (data.code === 1) {
            return { list: data.list, likes: data.likes, areas: data.area, categorys: data.categorys, cityname: data.cityname, total: data.count }
        } else if (data.code === 404) {

        }
    }
}
</script>