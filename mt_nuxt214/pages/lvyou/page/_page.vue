<template>
    <section class="poiList-wrap clear">
        <div class="content clear">
            <div class="breadcrumbs"><span><nuxt-link to="/">{{ cityname }}美团</nuxt-link>
                    &gt;
                </span><span><nuxt-link to="/lvyou/page/1">{{ cityname }}旅游</nuxt-link>
                </span>
            </div>
            <div class="left">
                <div class="filter">
                    <div class="condition">
                        <div class="cont clear">
                            <div class="classification">级别</div>
                            <div @click="goLevel('all')" :class="['all',levelValue == 'all' ? 'on' :'']">全部</div>
                            <ul class="more clear">
                                <li v-for="item of levels" :key="item">
                                    <a href="javascript:;" @click="goLevel(item)" :class="levelValue == item ? 'on' : ''">{{ item }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="cont clear">
                            <div class="classification">分类</div>
                            <div @click="goCate('all')" :class="['all',cateValue == 'all' ? 'on' :'']">全部</div>
                            <ul class="more clear">
                                <li v-for="item of cates" :key="item.cateName">
                                    <span @click="goCate(item.cateName)" :class="['hasSub',cateValue == item.cateName ? 'on' :'']"><b>{{ item.cateName }}</b></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="list">
                        <div>
                            <div class="tags">
                                <span v-for="item of tags" :key="item.value">
                                    <a href="javascript:;" @click="goTag(item.value)" :class="[item.value === tagValue ? 'on' :'']">{{ item.name }}</a>
                                </span>
                            </div>
                            <div class="line"></div>
                        </div>
                        <ul class="list-ul">
                            <li v-for="(item, index) of  list " :key="item.id" :class="['clear', (index != list.length - 1) ? 'btm' : '']">
                                <div class="img"><nuxt-link :to="'/lvyou/' + item.id">
                                        <div class="fl-count">{{ index + 1 }}</div>
                                        <div class="imgbox" style="height: 125px; width: 220px;"><img :data-src="item.img_url">
                                        </div>
                                    </nuxt-link></div>
                                <div class="info"><nuxt-link :to="'/lvyou/' + item.id">
                                        <h4>{{ item.name }}</h4>
                                        <div class="source clear">
                                            <div class="star-cont">
                                                <el-rate :value="Number(item.avgScore)" disabled
                                                    text-color="#ff9900"></el-rate>
                                            </div>
                                            <p>{{ item.avgScore }}分<span>{{ item.consumers }}</span>
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
            <div class="right">
                <guess-you-like :likes=likes></guess-you-like>
            </div>
        </div>
    </section>
</template>

<script>
import guessYouLike from "~/components/guess_you_like.vue";
export default {
    watchQuery:true, // 监听参数字符串更改并在更改时执行组件方法 (asyncData, fetch, validate, layout, ...)
    components: {
        guessYouLike
    },
    data() {
        return {
            tags:[{name:"默认",value:"create_time"},{name:"价格",value:"avgPrice"},{name:"好评最多",value:"avgScore"}],
            currentPage: Number(this.$route.params.page),
            total: 0,
            cityname: "",
            cates: [],
            levels: ['A级','3A','4A','5A'],
            list: [],
            likes: []
        }
    },
    computed:{
        tagValue(){
            return this.$route.query.sort || 'create_time'
        },
        levelValue(){
            return this.$route.query.level || 'all'
        },
        cateValue(){
            return this.$route.query.cateName || 'all'
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.$router.push({path:`/lvyou/page/${val}`,query:{...this.$route.query}})
        },
        goTag(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,sort:val}})
        },
        goLevel(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,level:val}})
        },
        goCate(val){
            this.$router.replace({path:`/lvyou/page/1`,query:{...this.$route.query,cateName:val}})
        }
    },
    async asyncData(ctx) {
        let {sort,level,cateName} = ctx.route.query
        let page = ctx.route.params.page
        let city = ctx.store.state.geo.position.city.replace("市", "")
        let { data } = await ctx.$axios.post(`/product/lvyou/page/${page}`, { cityname: city,sort,level,cateName })
        if (data.code === 1) {
            return { list: data.list, likes: data.likes, cates: data.cate, cityname: data.cityname, total: data.count }
        } else if (data.code === 404) {

        }
    }
}
</script>