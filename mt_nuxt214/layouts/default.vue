<template>
  <div>
    <headbar />
    <nuxt />
    <c_footer />
  </div>
</template>
<script>
import headbar from '~/components/headbar/index.vue'
import c_footer from '~/components/footer/index.vue'

export default {
  components: {
    headbar,
    c_footer
  }
}
</script>
<style></style>
