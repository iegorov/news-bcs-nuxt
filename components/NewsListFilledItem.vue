<template lang="pug">
  article.news-item
    span filled {{ item.id }}
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.news-item {
  display: block;
  height: 380px;
  background-color: yellow;
}
</style>
