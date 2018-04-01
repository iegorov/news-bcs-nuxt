const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title:
      'БКС Экспресс - новости фондового рынка и экономики. Статьи об инвестициях и финансовых инструментах. Котировки акций, графики онлайн. Технический и фундаментальный анализ. Комментарии и прогнозы аналитиков',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'БКС Экспресс - новости фондового рынка и экономики. Статьи об инвестициях и финансовых инструментах. Котировки акций, графики онлайн. Технический и фундаментальный анализ. Комментарии и прогнозы аналитиков.'
      },
      {
        name: 'keywords',
        content: 'новости, фондовый, рынок, экономика, инвестиции, финансы'
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'БКС Экспресс - новости фондового рынка и экономики.'
      },
      {
        property: 'og:description',
        content:
          'Статьи об инвестициях и финансовых инструментах. Котировки акций, графики онлайн. Технический и фундаментальный анализ. Комментарии и прогнозы аналитиков.'
      },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Global CSS
  */
  css: ['~/assets/app.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/filters.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'https://api.bcs.ru'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
