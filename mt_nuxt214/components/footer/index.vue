<template>
    <footer class="com-footer">
        <div class="footer-content">
            <c_link />
            <copyright />
        </div>
    </footer>
</template>
<script>
import c_link from './children/link.vue'
import copyright from './children/copyright.vue'

export default {
    components: {
        c_link,
        copyright
    }
}
</script>
<style lang="less">
.com-footer {
    background: #f8f8f8;
    margin-top: 40px;

    .footer-content {
        width: 1190px;
        margin: 0 auto;
        color: #333;
        font-size: 12px;
        line-height: 2;
        box-sizing: border-box;
        text-align: left;
    }
}
</style>