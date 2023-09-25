<template>
    <div class="recommend-container">
        <div class="index-nav-container"
            style="background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);">
            <ul class="clearfix ">
                <li class="title nav-item mf-shang-hei-regular">猜你喜欢</li>
                <li class="nav-item active">为你甄选最适合的</li>
            </ul>
        </div>
        <div class="recommend-list">
            <nuxt-link v-for="item of $store.state.home.recomend" :key="item.id" :to="'/meishi/' + item.id" class="link link recommend-item"
                target="_blank">
                <div class="card-container">
                    <div class="recommend-card-wrapper">
                        <div class="img-box"><img :src="item.img_url" class="image"></div>
                        <div class="info-box">
                            <div class="title aligned" :title="item.name">{{ item.name }}</div>
                            <div class="score-line aligned">
                                <div class="score">
                                    <div class="rate-stars">
                                        <el-rate :value="Number(item.avgScore)" disabled text-color="#ff9900"></el-rate>
                                    </div>
                                </div>
                                <div class="comment-number">{{ item.commentNum }}个评价</div>
                            </div>
                            <div class="desc-line aligned">
                                <div class="desc">{{ item.address_desc }}</div>
                            </div>
                            <div class="bottom-line aligned">
                                <div class="price-box"><span><span class="yuan">￥</span><span
                                            class="price-number numfont">{{ item.avgPrice }}</span><span
                                            class="price-desc">起</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="less" scoped>
.recommend-container {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    .recommend-list {
        background-color: #fff;
        border: 1px solid #E5E5E5;
        border-top: 0;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        max-height: 758px;
        padding: 10px 10px 20px;
        width: 100%;
        box-sizing: border-box;
        overflow-y: hidden;
        text-align: left;

        .recommend-item {
            display: inline-block;
            width: 20%;
            box-sizing: border-box;
            vertical-align: middle;

            .card-container {
                padding: 10px;

                .recommend-card-wrapper {
                    width: 100%;
                    box-sizing: border-box;

                    .img-box {
                        height: 0;
                        width: 100%;
                        padding-bottom: 56.25%;
                        background-color: #f4f4f4;
                        background-image: url(~/assets/images/lazyload.png);
                        background-size: cover;
                        background-position: 50% 50%;
                        border-radius: 4px;
                        overflow: hidden;

                        img {
                            width: 100%;
                            font-size: 0;
                        }
                    }

                    .info-box {
                        position: relative;
                        margin-top: 10px;

                        .title {
                            font-size: 14px;
                            color: #222222;
                            line-height: 20px;
                            width: 100%;
                            margin: 0;
                            font-weight: 500;

                            &.aligned {
                                font-size: 16px;
                                line-height: 22px;
                                width: 100%;
                                height: 22px;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                white-space: nowrap;
                            }
                        }

                        .score-line {
                            &.aligned {
                                height: 24px;
                            }

                            div {
                                display: inline-block;
                            }

                            .rate-stars {
                                height: 24px;
                                position: relative;
                                display: inline-block;
                            }

                            .comment-number {
                                font-size: 12px;
                                color: #999;
                                height: 24px;
                                line-height: 24px;
                                margin-left: 10px;
                            }
                        }

                        .desc-line {
                            &.aligned {
                                height: 18px;
                            }

                            .desc {
                                font-size: 12px;
                                color: #999999;
                                width: 100%;
                                height: 18px;
                                line-height: 18px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                margin-top: 4px;
                            }
                        }

                        .bottom-line {
                            position: relative;

                            &.aligned {
                                height: 28px;
                            }

                            .price-box {
                                color: #FF6600;

                                .yuan {
                                    font-size: 14px;
                                    font-weight: 700;
                                }

                                .price-number {
                                    font-size: 22px;
                                    letter-spacing: -0.5;
                                }

                                .price-desc {
                                    font-size: 12px;
                                    margin-left: 4px;
                                    font-weight: 700;
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