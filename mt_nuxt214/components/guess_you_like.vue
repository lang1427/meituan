<template>
    <div class="guess-you-like">
        <h4>猜你喜欢</h4>
        <ul>
            <li v-for="item of likes"><nuxt-link :to="'/meishi/' + item.id">
                    <div class="pic">
                        <div class="imgbox" style="height: 100%; width: 100%;"><img :src="item.img_url">
                        </div>
                    </div>
                    <p class="name">{{ item.name }}</p>
                    <p class="desc">{{ item.address_desc }}</p>
                    <p class="price"><b>￥</b>{{ item.avgPrice }}</p>
                </nuxt-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        likes: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="less" scoped>
.guess-you-like {
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background-color: #fff;
    padding: 16px 20px 0 20px;

    h4 {
        font-size: 16px;
        line-height: 22px;
        margin: 0 0 12px 0;
        color: #333;
    }

    ul {
        li {
            margin-bottom: 20px;

            a {
                display: block;
                text-decoration: none;
            }

            .pic {
                height: 106px;
                border-radius: 4px;
            }

            .name {
                font-size: 14px;
                line-height: 20px;
                color: #222;
                margin: 10px 0 4px 0;
            }

            .desc {
                font-size: 12px;
                line-height: 17px;
                color: #999;
            }

            .price {
                font-size: 22px;
                color: #ff6600;
                line-height: 27px;

                b {
                    font-weight: normal;
                    font-size: 14px;
                }
            }
        }
    }
}
</style>