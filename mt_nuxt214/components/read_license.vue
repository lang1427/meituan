<template>
    <div class="user-agreement-wrap">
        <div class="wrap-tip" ref="agreementTip">请先阅读并勾选用户协议</div>
        <div class="wrap-text">
            <el-checkbox v-model="check_license"></el-checkbox>
            我已阅读并同意<a href="https://rules-center.meituan.com/rules-detail/4" class="j-terms" id="meituanTos"
                target="_blank">《美团用户协议》</a>
            <a href="https://rules-center.meituan.com/rules-detail/2" class="j-terms" id="meituanTos"
                target="_blank">《隐私政策》</a>
            <br />并授权美团使用该美团账号信息（如昵称、头像、收货地址）进行统一管理
        </div>
    </div>
</template>
<script>
export default {
    props: {
        check: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        check_license: {
            get() {
                return this.check;
            },
            set(val) {
                this.$emit("update:check", val);//更新父组件中的title
            },
        },
    },
    methods: {
        validatorLicense() {
            if (!this.check) {
                this.$refs.agreementTip.style = "visibility: visible;"
                setTimeout(() => {
                    this.$refs.agreementTip.style = "visibility: hiddent;"
                }, 3000)
                return false
            }
            return true
        }
    }
}
</script>
<style lang="less">
.user-agreement-wrap {

    .wrap-tip {
        width: 140px;
        height: 26px;
        line-height: 25px;
        visibility: hidden;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        background-color: #222;
        font-weight: 400;
        position: relative;
        opacity: .7;
        left: 9.5px;
        top: -5px;
        font-size: 12px;

        &::after {
            content: '';
            position: absolute;
            top: 13px;
            left: 10px;
            width: 0;
            height: 0;
            transform: rotate(135deg);
            border-top: 14px solid #222;
            border-left: 14px solid transparent;
        }
    }

    .wrap-text {
        margin-left: 20px;
    }
}
</style>