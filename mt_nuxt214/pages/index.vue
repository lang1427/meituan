<template>
  <div>
    <div class="page index">
      <div class="index-container">
        <div class="banner-container clearfix">
          <div class="left-banner">
            <category />
          </div>
          <div class="right-banner">
            <banner />
          </div>
        </div>
        <homestay />
        <recomend />
      </div>
    </div>
    <navigation />
  </div>
</template>

<script>
import category from '~/components/home/category.vue'
import banner from '~/components/home/banner.vue'
import homestay from '~/components/home/homestay.vue'
import recomend from '~/components/home/recomend.vue'
import navigation from '~/components/navigation.vue'

export default {
  components: {
    category,
    banner,
    homestay,
    recomend,
    navigation
  },
  async fetch({ store, params }) {
    let cityname = store.state.geo.position.city.replace("市", "")
    let { data } = await store.$axios.post("/product/home", { cityname })
    store.commit('home/setCategory', data.categoryTree)
    store.commit('home/setRecomend', data.recomend)
  }
}
</script>

<style lang="less" scoped>
.page.index {
  text-align: center;

  .index-container {
    margin: 0 auto;
    width: 1190px;

    .banner-container {
      width: 1190px;
      margin: 0 auto;
      position: relative;

      .left-banner {
        float: left;
      }

      .right-banner {
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        position: relative;
      }
    }
  }
}
</style>
