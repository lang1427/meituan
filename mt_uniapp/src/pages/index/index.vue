<template>
  <view class="content">
    <view class="home-header">
      <view class="header ownClass">
        <navigator hover-class="none" class="nav-text" url="/" >广州
          <text class="iconfont icon-down">&#xe671;</text>
        </navigator>
        <navigator hover-class="none" class="search" url="/" >
          <text class="search-text">请输入商家名、品类或者商圈</text>
          <text class="search-btn">搜索</text>
        </navigator>
        <navigator hover-class="none" class="normal" url="/pages/login/login">
          <text class="iconfont icon-user">&#xe62e;</text>
        </navigator>
      </view>
    </view>
    <view class="category-container">
      <view v-for="item of categorys" :key="item.name" class="category-item">
        <image :src="item.src" class="category-item-img" />
        <text class="category-item-text">{{ item.name }}</text>
      </view>
      <view class="category-background-linear"></view>
    </view>
    <view class="home-feeds-container">
      <view class="water-fall-container">
        <view class="water-fall-card">
          <view class="feeds-card-container card-low">
            <view class="feeds-img-wrap">
              <img src="//p0.meituan.net/content/9543e34f59c343282a8f83926f72f585173498.jpg@257w_172h_1e_1c_90q_50Q" class="feeds-card-img" />
            </view>
            <view class="feeds-card-info">
              <text class="feeds-card-title one-line-title">
                蜜雪冰城(多城市)
              </text>
              <text class="feeds-card-desc">冰鲜柠檬水</text>
              <view class="feeds-card-bottom">
                <view class="feeds-card-price">
                  <text class="price-1">¥</text>2.9<text class="price-2">起</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <uni-load-more status="more"></uni-load-more>
    </view>
  </view>
</template>

<script>
import waimai_src from '../../static/home/1fda8784fc557b08fc893956511843605381.png'
import tuangou_src from '../../static/home/421b2ac47bbaba9093b8170795dfcead14272.png'
import jiudian_src from '../../static/home/9faab44f20643ad716a822c0bb8bd6ea4650.png'
import yule_src from '../../static/home/1e40f5dc8e1d2e1e1fdc82048ec844026217.png'
import maoyan_src from '../../static/home/fb7065f359485d456aa8191231ee50fa5340.png'
import ktv_src from '../../static/home/6a97219959cff002efbb6c084d62ae764380.png'
import zhoubianyou_src from '../../static/home/826706e3b3730e63db279fd7c517d6294622.png'
import liren_src from '../../static/home/2657d0dc065959c94af35053af2368d35215.png'
import muyin_src from '../../static/home/0f711f3b8d9691b6f5ea1689fd0f67df3794.png'
import chonwu_src from '../../static/home/ff61666c9490fd94449e0d61ba11ad1b4339.png'
import yangche_src from '../../static/home/d9d03e9c163238b9fd35d431dfeccde66577.png'
import yundong_src from '../../static/home/a72bff02f71b4d24495a0442f145d7e33459.png'
import xuexi_src from '../../static/home/6f52adf3ee99b99d93e387144932ff3c4359.png'
import jiehun_src from '../../static/home/e84d4120153865f41fcb3abfd0cdd0ec4855.png'
import qita_src from '../../static/home/db57ccace829c3786ad97e65b37013084404.png'
export default {
  data() {
    return {
      categorys:[
        { name: "外卖",src:waimai_src},
        { name: "美食团购",src:tuangou_src},
        { name: "酒店",src:jiudian_src},
        { name: "娱乐",src:yule_src},
        { name: "猫眼电影",src:maoyan_src},
        { name: "KTV",src:ktv_src},
        { name: "周边游",src:zhoubianyou_src},
        { name: "丽人",src:liren_src},
        { name: "母婴",src:muyin_src},
        { name: "宠物",src:chonwu_src},
        { name: "养车用车",src:yangche_src},
        { name: "运动健身",src:yundong_src},
        { name: "学习培训",src:xuexi_src},
        { name: "结婚摄影",src:jiehun_src},
        { name: "其他",src:qita_src}
      ]
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  .home-header{
    .header{
      display: flex;
      height: 96rpx;
      background: $theme-color;
      padding: 0 30rpx;
      align-items: center;
      font-size: 27rpx;
      .nav-text{
        display: flex;
        margin-right: 30rpx;
        align-items: center;
        .nav-text-icon{}
      }
      .search{
        flex: 1;
        position: relative;
        height: 68rpx;
        padding: 0 26rpx;
        border-radius: 40rpx;
        background-color: #fff;
        color: #999;
        .search-text{
          flex: 1;
          max-width: 80%;
          line-height: 9.066667vw;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .search-btn{
          position: absolute;
          right: 6rpx;
          top: 6rpx;
          width: 104rpx;
          height: 56rpx;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffd100;
          border-radius: 40rpx;
          opacity: .9;
          color: #000;
        }
      }
      .icon-down{
        color: #000;
        margin-left: 10rpx;
        font-size: 16rpx;
      }
      .normal{
        margin-left: 20rpx;
        padding: 26rpx 0;
      }
      .icon-user{
        font-size: 48rpx;
        color: #000;
      }
    }
  }
  .category-container{
    display: flex;
    width: 100%;
    height: 400rpx;
    padding-top: 4rpx;
    justify-content: space-around;
    flex-wrap: wrap;
    .category-item{
      width: 132rpx;
      height: 131rpx;
      .category-item-img{
        width: 132rpx;
        height: 96rpx;
      }
      .category-item-text{
        width: 132rpx;
        height: 33rpx;
        display: flex;
        color: #000;
        justify-content: center;
        font-size: 24rpx;
      }
    }
    .category-background-linear{
      width: 100%;
      height: 40rpx;
      margin-top: 10rpx;
      background: linear-gradient(to bottom,#ffffff,#f0f0f0);
    }
  }
  .home-feeds-container{
    background: #f0f0f0;
    .water-fall-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 24rpx;
      .water-fall-card{
        display: flex;
        width: 340rpx;
        border-radius: 20rpx;
        background: #fff;
        margin-top: 20rpx;
        .feeds-card-container{
          .feeds-img-wrap{
            display: flex;
            justify-content: center;
            width: 340rpx;
            height: 340rpx;
            overflow: hidden;
            border-radius: 20rpx 20rpx 0 0;
            .feeds-card-img{
            }
          }
          .feeds-card-info{
            display: flex;
            padding: 12rpx 16rpx 20rpx;
            flex-direction: column;
            .feeds-card-title{
              height: 72rpx;
              line-height: 36rpx;
              word-break: break-all;
              text-overflow: ellipsis;
              overflow: hidden;
              -webkit-line-clamp: 2;
              font-size: 28rpx;
              color: #191919;
            }
            .feeds-card-desc{
              font-size: 24rpx;
              color: #999;
              margin-top: 10rpx;
              height: 24rpx;
              line-height: 24rpx;
              word-break: break-all;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .feeds-card-bottom{
              display: flex;
              margin-top: 16rpx;
              .feeds-card-price{
                display: flex;
                align-items: baseline;
                font-size: 30rpx;
                color: #ff2d1a;
                .price-1{
                  font-size: 24rpx;
                }
                .price-2{
                  color: #999;
                  font-size: 28rpx;
                  padding-left: 4rpx;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
