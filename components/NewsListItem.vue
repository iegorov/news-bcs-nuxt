<template lang="pug">
  article.news-item
    span {{ item.id }}
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
  background-color: red;
}
</style>


