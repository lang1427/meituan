<template>
    <web-view :src="url"></web-view>
</template>

<script>
export default {
    data() {
    return {
      url: ''
    }
  },
  onLoad(item) {
    this.url = decodeURIComponent(item.url)
    console.log(this.url)
  }
}
</script>

<style lang="scss" scoped>

</style>