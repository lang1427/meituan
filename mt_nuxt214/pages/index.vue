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

  .index-nav-container {
    width: 100%;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    font-size: 14px;
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

    .title {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
    }

    .nav-item {
      float: left;
      padding: 0 5px;
      position: relative;
      cursor: pointer;
      text-transform: uppercase;

      &.active:after {
        position: absolute;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 7px solid #fff;
        content: " ";
        display: block;
        width: 2px;
        height: 0;
        top: 37px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    .total {
      float: right;
      margin-right: 12px;

      a {
        color: #fff;
      }
    }
  }
}
</style>
