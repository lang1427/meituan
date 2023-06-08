<template>
    <client-only>
        <div style="padding:0 10px;">
            <div class="clip-board">
                <vue-cropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType"
                    :info="true" :fixed="fixed" :fixed-number="fixedNumber" :can-move="option.canMove"
                    :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                    :auto-crop="option.autoCrop" @real-time="realTime" :high="option.high" @img-load="imgLoad" mode="cover"
                    :max-img-size="option.max" @crop-moving="cropMoving"></vue-cropper>
            </div>

            <!-- 大屏预览 -->
            <!-- <div class="model" v-show="model" @click="model = false">
                <div class="model-show">
                    <img :src="modelSrc" alt="">
                </div>
            </div> -->

            <!-- 预览图 -->
            <div class="show-preview"
                :style="{ 'width': previews.w + 'px', 'height': previews.h + 'px', 'overflow': 'hidden', 'margin': '5px', 'padding-left': '10px' }">
                <div :style="previews.div">
                    <img :src="previews.url" :style="previews.img">
                </div>
            </div>

            <div style="clear:both"></div>

            <!-- 操作事件 -->
            <div>
                <label class="btn" for="uploads">选择文件</label>
                <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);"
                    accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">

                <!-- 开启/关闭截图功能
                    <button @click="startCrop" v-if="!crap" class="btn">start</button>
                    <button @click="stopCrop" v-else class="btn">stop</button>
                    <button @click="clearCrop" class="btn">clear</button>
                    <button @click="refreshCrop" class="btn">refresh</button> 
                -->

                <!--  控制截图 缩放功能
                    <button @click="changeScale(1)" class="btn">+</button>
                    <button @click="changeScale(-1)" class="btn">-</button> 
                -->

                <!-- 旋转图像 
                    <button @click="rotateLeft" class="btn">rotateLeft</button>
                    <button @click="rotateRight" class="btn">rotateRight</button> 
                -->

                <!-- 预览事件
                    <button @click="finish('base64')" class="btn">preview(base64)</button>
                    <button @click="finish('blob')" class="btn">preview(blob)</button> 
                -->

                <!-- 下载截图图像
                <a @click="down('base64')" class="btn">download(base64)</a>
                <a @click="down('blob')" class="btn">download(blob)</a> -->

            </div>
        </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            model: false,
            modelSrc: '',
            crap: false,    // 控制截图状态
            previews: {},   // 图像预览对象 （w：截图图像宽度，h：截图图像高度，url：截图图像src，img：预览图像img标签的样式，div：预览图像img上层样式）
            option: {
                img: this.$store.state.user.userInfo.avatar,
                size: 1,        // 裁剪生成的图像质量 （0.1~1）
                outputType: 'png',  // 输出图片的格式 （jpg,png,webp）
                original: true,     // 上传图片按照原始比例渲染
                fixedBox: false,  //  固定截图框尺寸
                canMove: true,      // 能否拖动原图片
                canMoveBox: true,   // 能否拖动截图框
                autoCrop: true,  // 是否自动生成截图框
                // 只有自动截图开启 宽度高度才生效
                // autoCropWidth: 750,   // 默认生成截图框宽度      原图像层容器的80%
                // autoCropHeight: 340,    // 默认生成截图框高度
                high: true, // 是否按照设备的dpr 输出等比例图片
                max: 300   // 限制图像最大宽高度
            },
            fixed: false,  // 是否开启截图宽高固定比例
            fixedNumber: [16, 9] // 截图宽高比例
        }
    },
    components: {
    },
    methods: {
        // startCrop() {
        //     this.crap = true
        //     this.$refs.cropper.startCrop()
        // },
        // stopCrop() {
        //     this.crap = false
        //     this.$refs.cropper.stopCrop()
        // },
        // clearCrop() {
        //     this.$refs.cropper.clearCrop()
        // },
        // refreshCrop() {
        //     this.$refs.cropper.refresh()
        // },
        // changeScale(num) {
        //     num = num || 1
        //     this.$refs.cropper.changeScale(num)
        // },
        // rotateLeft() {
        //     this.$refs.cropper.rotateLeft()
        // },
        // rotateRight() {
        //     this.$refs.cropper.rotateRight()
        // },
        // finish(type) {
        //     if (type === 'blob') {
        //         this.$refs.cropper.getCropBlob((data) => {
        //             console.log(data);
        //             var img = window.URL.createObjectURL(data)
        //             this.model = true
        //             this.modelSrc = img
        //         })
        //     } else {
        //         this.$refs.cropper.getCropData((data) => {
        //             this.model = true
        //             this.modelSrc = data
        //         })
        //     }
        // },
        // 实时预览函数
        realTime(data) {
            this.previews = data
        },
        down(type) {
            var aLink = document.createElement('a')
            aLink.download = 'demo'
            // 输出
            if (type === 'blob') {
                this.$refs.cropper.getCropBlob((data) => {
                    this.downImg = window.URL.createObjectURL(data)
                    aLink.href = window.URL.createObjectURL(data)
                    aLink.click()
                })
            } else {
                this.$refs.cropper.getCropData((data) => {
                    this.downImg = data
                    aLink.href = data
                    aLink.click()
                })
            }
        },
        uploadImg(e, num) {
            //上传图片
            // this.option.img
            var file = e.target.files[0]
            if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                return false
            }
            var reader = new FileReader()
            reader.onload = (e) => {
                let data
                if (typeof e.target.result === 'object') {
                    // 把Array Buffer转化为blob 如果是base64不需要
                    data = window.URL.createObjectURL(new Blob([e.target.result]))
                } else {
                    data = e.target.result
                }
                if (num === 1) {
                    this.option.img = data
                } else if (num === 2) {
                    this.example2.img = data
                }
            }
            // 转化为base64
            // reader.readAsDataURL(file)
            // 转化为blob
            reader.readAsArrayBuffer(file)
        },
        imgLoad(msg) {
            // console.log(msg)
        },
        cropMoving(data) {
            // console.log(data, '截图框当前坐标')
        },
        Upload() {
            this.$refs.cropper.getCropBlob((data) => {
                let formData = new FormData()
                formData.append("avatar", data)
                this.$axios({
                    url: '/upload/change/avatar',
                    method: 'post',
                    headers: {
                        "authorization": this.$store.state.user.token,
                        'Content-Type': 'multipart/form-data'
                    },
                    data: formData
                }).then(res => {
                    if (res.data.code === 1) {
                        this.$emit("uploadSuccess")
                        this.$store.dispatch("user/setUserInfo", { avatar: res.data.avatar })
                    } else {
                        this.$message({ type: 'error', message: res.data.msg })
                    }
                }, err => {
                    this.$message({ type: 'error', message: err })
                })
            })
        }
    }
}
</script>

<style lang="less" scoped>
.clip-board {
    float: left;
    width: 300px;
    height: 300px;
}

.btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #c0ccda;
    color: #1f2d3d;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 20px 10px 0px 0px;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
    transition: all .2s ease;
    text-decoration: none;
    user-select: none;
}

// .model {
//     position: fixed;
//     z-index: 10;
//     width: 100vw;
//     height: 100vh;
//     overflow: auto;
//     top: 0;
//     left: 0;
//     background: rgba(0, 0, 0, 0.8);

//     .model-show {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         width: 100vw;
//         height: 100vh;
//     }

//     img {
//         display: block;
//         margin: auto;
//         max-width: 80%;
//         user-select: none;
//         background-position: 0px 0px, 10px 10px;
//         background-size: 20px 20px;
//         background-image: linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee 100%), linear-gradient(45deg, #eee 25%, white 25%, white 75%, #eee 75%, #eee 100%);
//     }
// }
</style>