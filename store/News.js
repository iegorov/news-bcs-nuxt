export default {
  state() {
    return {
      news: []
    };
  },
  getters: {
    news: ({ news }) => news
  },
  mutations: {
    addNews(state, news) {
      state.news.push(...news);
    }
  },
  actions: {
    async fetchNews({ commit }, pageNumber) {
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
    }
  }
};
