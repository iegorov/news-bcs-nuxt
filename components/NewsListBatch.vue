<template>
  <div
    :class="`batch--${viewType}`"
    class="batch">
    <div
      v-for="(itemNews, index) in batch"
      :key="itemNews.id"
      class="batch__item">
      <NewsItemFilled
        v-if="index===0"
        :item="itemNews"/>
      <NewsItem
        v-else
        :item="itemNews"/>
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/NewsItem';
import NewsItemFilled from '@/components/NewsItemFilled';

/**
 * Порция новостей (1 страница)
 * @typedef {Array} Batch - Список новостей
 */
export default {
  components: { NewsItem, NewsItemFilled },
  props: {
    /**
     * @type {Batch}
     */
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


