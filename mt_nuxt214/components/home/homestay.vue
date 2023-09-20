<template>
  <div class="zhenguo-container">
    <div class="index-nav-container" style="background: linear-gradient(to right,rgb(243, 182, 74) 2%,rgb(242, 197, 69) 97% )rgb(243, 182, 74);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">推荐民宿</li>
        <li 
            v-for="(item,index) of homestayList" :key="item.id" 
            :class="['nav-item',index ===homestayIndex ? 'active' : '']"
            @mouseenter="handleEnter(index)">{{ item.name }}
        </li>
        <li class="total nav-item">
          <a href="https://minsu.meituan.com?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend" class="link" target="_blank" >
            <span>全部</span><span class="right-arrow iconfont icon-btn_right"></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="minsu-ls-view clearfix">
      <div class="products" style="display: flex">
        <div class="minsu-item" v-for="item of curStay" :key="item.id">
          <a href="https://minsu.meituan.com/housing/17145192/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=recommend"  target="_blank">
            <div class="product-card-header">
              <img :src="item.img_url" class="product-img"/>
              <img src="http://47.93.187.37:8000/p0/avatar/6156acd3c8dbafb92f285c21e0a8ee6a18419.jpg@200w_200h_1e_1c" class="head-img"/>
            </div>
            <div class="product-info">
              <p class="product-title">
                {{ item.name }}
              </p>
              <p class="sub-title">
                <span>{{ item.notice }} | </span
                ><span>{{ item.address_desc }}</span>
              </p>
              <p class="price-number numfont price">
                <span class="price-icon">￥</span>{{ item.avgPrice }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      homestayList: [
        { name: "深圳", id: 77 },
        { name: "珠海", id: 96 },
        { name: "桂林", id: 98 },
        { name: "北海", id: 100 },
        { name: "海口", id: 120 },
        { name: "惠州", id: 82 },
        { name: "佛山", id: 80 },
        { name: "东莞", id: 79 },
        { name: "柳州", id: 107 },
        { name: "清远", id: 87 }
      ],
      homestayIndex:0,
      stayData:{ 0:[], 1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[]}
    };
  },
  computed:{
    curStay(){
        return this.stayData[this.homestayIndex]
    }
  },
  created(){
    this.getHomestay(this.homestayList[this.homestayIndex].id)
  },
  methods:{
    handleEnter(index){
        this.homestayIndex = index
        if(this.stayData[this.homestayIndex].length != 0){
            return false
        }
        this.getHomestay(this.homestayList[this.homestayIndex].id)
    },
    async getHomestay(id){
        let res = await this.$axios.get(`/product/hotel?city_id=${id}&hotel_type=51&page=1&count=6`)
        if(res.data.code === 1){
            this.stayData[this.homestayIndex] = res.data.data
        }
    }
  }
};
</script>

<style lang="less" scoped>
.zhenguo-container {
  position: relative;
  margin: 40px auto;

  .minsu-ls-view {
    padding: 20px;
    padding-right: 0;
    padding-bottom: 0;
    border: 1px solid #e5e5e5;
    border-top: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #fff;

    .products {
      display: flex;
      flex-wrap: wrap;

      .minsu-item {
        float: left;
        margin-right: 18px;

        .product-card-header {
          position: relative;

          .product-img {
            width: 370px;
            height: 208px;
            border-radius: 4px;
            background: url(~/assets/images/lazyload.png);
            background-size: cover;
            background-position: 50%;
            max-width: 100%;
            height: 208px;
            margin-bottom: 11px;
            cursor: pointer;
          }

          .head-img {
            border: 2px solid #ffffff;
            height: 48px;
            width: 48px;
            position: absolute;
            bottom: -12px;
            right: 15px;
            z-index: 9;
            border-radius: 40px;
            background-image: url(~/assets/images/lazyload_avatar.png);
            background-size: 100%;
            background-position: 50% 50%;
            background-repeat: no-repeat;
          }
        }

        .product-info {
          text-align: left;
          padding-bottom: 25px;

          .product-title {
            font-size: 16px;
            color: #222222;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 7px 0;
            font-weight: 400;
            width: 297px;
          }

          .sub-title {
            font-size: 12px;
            color: #999999;
            text-align: left;
          }

          .price {
            font-weight: 500;
            font-size: 22px;
            color: #ff6600;
            letter-spacing: -0.8px;
            padding: 4px 0;

            .price-icon {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>