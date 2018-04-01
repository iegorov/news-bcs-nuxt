export default {
  state() {
    return {
      news: [],
      preloadedNews: []
    };
  },
  getters: {
    news: ({ news }) => news,
    preloadedNews: ({ preloadedNews }) => preloadedNews
  },
  mutations: {
    addNews(state, news) {
      state.news.push(...news);
    },
    addPreloadedNews(state, news) {
      state.preloadedNews.push(...news);
    },
    resetPreloadedNews(state, news) {
      state.preloadedNews = [];
    }
  },
  actions: {
    async fetchNews({ commit, state }, pageNumber) {
      if (state.preloadedNews.length) {
        commit('addNews', state.preloadedNews);
        commit('resetPreloadedNews');
        return;
      }
      try {
        const news = await this.$axios.$get('/express_articles/v1', {
          params: {
            text_length: 50,
            page: pageNumber,
            per_page: 5
          }
        });
        commit('addNews', news);
      } catch (error) {
        console.error('Ошибка получения новостей', error);
      }
    },
    async prefetchNews({ commit }, pageNumber) {
      try {
        const news = await this.$axios.$get('/express_articles/v1', {
          params: {
            text_length: 50,
            page: pageNumber,
            per_page: 5
          }
        });
        commit('addPreloadedNews', news);
      } catch (error) {
        console.error('Ошибка получения новостей', error);
      }
    }
  }
};
