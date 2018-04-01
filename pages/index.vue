<template>
  <section class="news-page">
    <h1 class="news-page__title">Новости БКС Экспресс</h1>
    <div class="news-page__content">
      <NewsList :news="news" />
      <AppButton
        @click.native="showMoreNews"
        @mouseover.native="preloadhNews">
        <span v-if="loading">загрузка...</span>
        <span v-else>Показать ещё</span>
      </AppButton>
    </div>
  </section>
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
    },
    preloadhNews() {
      if (this.$store.getters['News/preloadedNews'].length) {
        return;
      }
      const nextPageNumber = this.currentPageNumber + 1;
      this.$store.dispatch('News/prefetchNews', nextPageNumber);
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
