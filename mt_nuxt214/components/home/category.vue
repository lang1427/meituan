<template>
  <div class="category-nav-container">
    <div class="category-nav-title-wrapper"><span class="category-nav-title">全部分类</span><span class="title-icon"></span>
    </div>
    <div class="category-nav-content-wrapper">
      <ul>
        <li class="nav-li" v-for="(item,index) of $store.state.home.category"  @mouseenter="handleEnter(index)" @mouseleave="handleLeave()"><i class="iconfontNew hc-icon-hotelNew"></i><span
            class="nav-text-wrapper"><span><a href="https://gz.meituan.com/meishi/" class="link nav-text"
                target="_blank">{{ item.name }}</a></span></span><i class="nav-right-arrow"></i></li>
      </ul>
    </div>
    <div class="category-nav-detail-wrapper" ref="categoryDetailWrapper" @mouseenter="handleEnter()" @mouseleave="handleLeave()">
      <div :class="['category-nav-detail',index === handleIndex ? 'active':'' ]" v-for="(item,index) of $store.state.home.category">
        <div class="detail-area">
          <div class="detail-title-wrapper clearfix">
            <h2><a href="https://gz.meituan.com/meishi/" class="link detail-title" target="_blank">{{ item.name }}</a>
            </h2><a href="https://gz.meituan.com/meishi/" class="link detail-more" target="_blank">更多<i
                class="detail-right-arrow"></i></a>
          </div>
          <div class="detail-content">
            <a v-for="children of item.children" href="https://gz.meituan.com/meishi/c393/" class="link detail-text"
              target="_blank">{{ children.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      handleIndex:-1
    }
  },
  methods: {
    handleEnter(index) {
      this.$refs.categoryDetailWrapper.style = "display:block;"
      if(!!index){
        this.handleIndex = index
      }
    },
    handleLeave() {
      this.$refs.categoryDetailWrapper.style = "display:none;"
    }
  }
}
</script>

<style lang="less" scoped>
.category-nav-container {
  width: 230px;
  height: 475px;
  position: relative;
  text-align: left;
  box-sizing: border-box;
  float: left;
  margin-top: -50px;
  color: #646464;
  background: #FFF;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;

  .category-nav-title-wrapper {
    height: 50px;
    padding-top: 15px;
    box-sizing: border-box;

    .category-nav-title {
      color: #222222;
      font-size: 16px;
      font-weight: 700;
      margin-left: 15px;
    }
  }

  .category-nav-content-wrapper {
    ul {
      height: 425px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .nav-li {
        position: relative;
        box-sizing: border-box;
        padding: 0 12px;
        height: 26px;

        .nav-text-wrapper {
          display: inline-block;
          margin-left: 11px;

          .nav-text {
            font-size: 13px;
            line-height: 20px;
            height: 20px;
            color: #646464;
            cursor: pointer;
          }
        }

        .nav-right-arrow {
          width: 4px;
          height: 4px;
          color: #BFBFBF;
          border-bottom: 1px solid #BFBFBF;
          border-right: 1px solid #BFBFBF;
          transform: rotate(-45deg);
          display: block;
          position: absolute;
          right: 13px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
  }

  .category-nav-detail-wrapper {
    display: none;
    position: absolute;
    top: 60px;
    left: 230px;
    width: 400px;
    height: 416px;
    background-color: #fff;
    z-index: 199;
    color: #666;
    overflow: hidden;

    .category-nav-detail {
      display: none;

      &.active {
        display: block;
      }

      .detail-area {
        padding: 0 30px;

        .detail-title-wrapper {
          margin-top: 24px;
          height: 22px;
          line-height: 22px;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;

          .detail-title {
            font-size: 16px;
            font-weight: 500;
            color: #222;
            cursor: pointer;
            float: left;
          }

          .detail-more {
            font-size: 12px;
            color: #999;
            font-weight: 400;
            float: right;
            margin-right: 6px;
            position: relative;
            cursor: pointer;

            .detail-right-arrow {
              width: 4px;
              height: 4px;
              border-bottom: 1px solid #999;
              border-right: 1px solid #999;
              transform: rotate(-45deg);
              display: block;
              position: absolute;
              top: 0;
              bottom: 0;
              right: -6px;
              margin: auto;
            }
          }
        }

        .detail-content {
          .detail-text {
            color: #999;
            font-size: 12px;
            line-height: 15px;
            display: inline-block;
            margin-right: 16px;
            margin-top: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>