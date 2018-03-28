<template lang="pug">
  .batch(:class="`batch--${viewType}`")
    .batch__item(
      v-for="(itemNews, index) in batch"
      :key="itemNews.id"
    )
      NewsListFilledItem(
        :item="itemNews"
        v-if="index===0"
      )
      NewsItem(
        :item="itemNews"
        v-else
      )
</template>

<script>
import NewsItem from '@/components/NewsItem';
import NewsListFilledItem from '@/components/NewsListFilledItem';

export default {
  components: { NewsItem, NewsListFilledItem },
  props: {
    batch: {
      type: Array,
      required: true
    },
    viewType: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.batch {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &--right {
    .batch__item:nth-child(2) {
      order: -1;
    }
  }
}

.batch__item {
  padding: 0 15px;
  margin-bottom: 30px;
  width: 33.33%;

  &:first-child {
    width: 66.66%;
  }
}
</style>


