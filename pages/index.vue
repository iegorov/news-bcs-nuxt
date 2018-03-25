<template lang="pug">
  section.news-page
    h1.news-page__title Новости БКС Экспресс
    .news-page__content
      NewsList(:news="news")
      AppButton(@click.native="showMoreNews")
        span(v-if="loading") загрузка...
        span(v-else) Показать ещё
</template>

<script>
import NewsList from '@/components/NewsList';
import AppButton from '@/components/AppButton';

export default {
  components: { NewsList, AppButton },
  data() {
    return {
      currentPageNumber: 1,
      loading: false
    };
  },
  async fetch({ store }) {
    await store.dispatch('News/fetchNews', 1);
  },
  computed: {
    news() {
      return this.$store.getters['News/news'];
    }
  },
  methods: {
    async showMoreNews() {
      if (this.loading) {
        return;
      }
      const nextPageNumber = this.currentPageNumber + 1;
      this.loading = true;
      await this.$store.dispatch('News/fetchNews', nextPageNumber);
      this.currentPageNumber = nextPageNumber;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.news-page__title {
  display: block;
  margin-bottom: 35px;
  font-weight: 700;
  font-size: 21px;
  line-height: 31px;
  letter-spacing: 1px;
}
</style>
