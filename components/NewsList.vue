<template lang="pug">
  .news-list
    .news-list__batch
      .news-list__item(
        v-for="itemNews in news"
        :key="itemNews.id"
      )
        NewsListItem(
          :item="itemNews"
        )
</template>

<script>
import NewsListItem from '@/components/NewsListItem';

export default {
  components: { NewsListItem },
  props: {
    news: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.news-list__batch {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
.news-list__item {
  padding: 0 15px;
  margin-bottom: 30px;
  width: 33.33%;

  &:first-child {
    width: 66.66%;
  }
}
</style>


