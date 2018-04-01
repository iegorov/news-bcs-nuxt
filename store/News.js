import Vue from 'vue';

export default {
  state() {
    return {
      news: [],
      preloadedNews: {}
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
    addPreloadedNews(state, { pageNumber, news }) {
      Vue.set(state.preloadedNews, pageNumber, news);
    },
    resetPreloadedNews(state, pageNumber) {
      Vue.delete(state.preloadedNews, pageNumber);
    }
  },
  actions: {
    async fetchNews(
      { commit, dispatch, getters: { preloadedNews } },
      pageNumber
    ) {
      if (hasNews(preloadedNews, pageNumber)) {
        commit('addNews', preloadedNews[pageNumber]);
        commit('resetPreloadedNews', pageNumber);
        return;
      }
      try {
        const news = await dispatch('getNews', pageNumber);
        commit('addNews', news);
      } catch (error) {
        console.error('Ошибка получения новостей', error);
      }
    },
    async prefetchNews(
      { commit, dispatch, getters: { preloadedNews } },
      pageNumber
    ) {
      if (hasNews(preloadedNews, pageNumber)) {
        return;
      }
      try {
        const news = await dispatch('getNews', pageNumber);
        commit('addPreloadedNews', { pageNumber, news });
      } catch (error) {
        console.error('Ошибка получения новостей', error);
      }
    },
    async getNews(context, pageNumber) {
      return await this.$axios.$get('/express_articles/v1', {
        params: {
          text_length: 50,
          page: pageNumber,
          per_page: 5
        }
      });
    }
  }
};

function hasNews(news, pageNumber) {
  return news[pageNumber] && news[pageNumber].length;
}
