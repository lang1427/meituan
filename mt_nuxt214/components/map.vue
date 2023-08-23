<template>
    <div class="map-container" :id="id" :style="{ width: width + 'px', height: height + 'px', margin: '34px auto' }"></div>
</template>
<script>
export default {
    name: "Mapview",
    props: {
        width: {
            type: Number,
            default: 300
        },
        height: {
            type: Number,
            default: 300
        },
        point: {
            type: Array,
            default() {
                return [116.405285, 39.904989]
            }
        }
    },
    data() {
        return {
            //此处不声明 map 对象，可以直接使用 this.map赋值或者采用非响应式的普通对象来存储。
            //map:null,
            id: "map",
            marker: null
        }
    },
    mounted() {
        window.onload  = () => {

            // 初始化Map
            var map = new window.AMap.Map(this.id, {
                zoom: 11, // 地图缩放级别
                center: this.point,  // 初始中心点经纬度
            })

            this.map = map

            // 添加工具栏插件
            window.AMap.plugin('AMap.ToolBar', () => {
                let toolbar = new window.AMap.ToolBar()
                map.addControl(toolbar)
            })

            // 实例化点标记
            this.addMarker()
        }
    },
    methods: {

        addMarker() {
            // 自定义图标
            const icon = new AMap.Icon({
                size: new AMap.Size(20, 25),    // 图标尺寸
                image: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",  // Icon的图像
                // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
                imageSize: new AMap.Size(20, 25)   // 根据所设置的大小拉伸或压缩图片
            });
            this.marker = new AMap.Marker({
                icon,  // 点标记展示的图片内容
                position: this.point, // 点标记 坐标
            });
            this.marker.setMap(this.map);
        }
    },
    watch: {
        point: function (val, old) {
            if(!!this.map){
                this.map.setCenter(val)
                this.marker.setPosition(val)
            }
        }
    }


}
</script>
<style lang="less" scoped>
.map-container{
    position: absolute;
    z-index: 1111;
}
</style>