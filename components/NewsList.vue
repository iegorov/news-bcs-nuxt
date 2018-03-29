<template lang="pug">
  .news-list
    NewsListBatch.news-list__batch(
      v-for="(batch, index) in batches"
      :batch="batch"
      :viewType="index % 2 === 0 ? 'left' : 'right'"
      :key="index"
    )
</template>

<script>
import NewsListBatch from '@/components/NewsListBatch';

export default {
  components: { NewsListBatch, },
  props: {
    news: {
      type: Array,
      required: true
    }
  },
  computed: {
    batches() {
      return this.news.reduce((result, item, index) => {
        if (index % 5 === 0) {
          result.push([]);
        }
        result[result.length - 1].push(item);
        return result;
      }, []);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


