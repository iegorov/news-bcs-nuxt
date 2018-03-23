<template lang="pug">
  section.news-page
    h1.news-page__title Новости БКС Экспресс
    .news-page__content
      NewsList(:news="news")
      AppButton(@click.native="showMoreNews")
        | Показать ещё
</template>

<script>
import NewsList from '@/components/NewsList';
import AppButton from '@/components/AppButton';

export default {
  components: { NewsList, AppButton },
  data() {
    return {
      news: [
        {
          id: 163991,
          access: 0,
          type: 'news',
          publish_date: '2018-03-22T12:55:00',
          nix_publish_date: 1521723300,
          title: 'Ход торгов. Внешний фон сегодня не поддерживает покупателей',
          announce:
            'Индексы:\n\nКотировки на 12:50 МСК\n\nИндекс МосБиржи: ...',
          article_url:
            'https://bcs-express.ru/novosti-i-analitika/khod-torgov-vneshnii-fon-segodnia-ne-podderzhivaet-pokupatelei',
          rubric: 'Российский рынок',
          rubric_url: 'https://bcs-express.ru/category/rossiyskiy-rynok',
          small_image_url: 'https://api.bcs.ru/resource/top_image/4028/1',
          medium_image_url: 'https://api.bcs.ru/resource/top_image/4028/2',
          big_image_url: 'https://api.bcs.ru/resource/top_image/4028/3',
          view_count: 52,
          comment_count: 0,
          like_count: 0
        },
        {
          id: 163989,
          access: 0,
          type: 'news',
          publish_date: '2018-03-22T12:13:00',
          nix_publish_date: 1521720780,
          title: 'ФРС повысила прогнозы по ключевой ставке',
          announce: 'Значения индексов США на закрытии:\n\nИндекс Dow ...',
          article_url:
            'https://bcs-express.ru/novosti-i-analitika/frs-povysila-prognozy-po-kliuchevoi-stavke',
          rubric: 'Мировые рынки',
          rubric_url: 'https://bcs-express.ru/category/mirovye-rynki',
          small_image_url: 'https://api.bcs.ru/resource/top_image/2163/1',
          medium_image_url: 'https://api.bcs.ru/resource/top_image/2163/2',
          big_image_url: 'https://api.bcs.ru/resource/top_image/2163/3',
          view_count: 196,
          comment_count: 0,
          like_count: 0
        },
        {
          id: 163988,
          access: 0,
          type: 'news',
          publish_date: '2018-03-22T11:54:00',
          nix_publish_date: 1521719640,
          title:
            'Банк Санкт-Петербург увеличил прибыль на 41% за IV квартал 2017 г.',
          announce: 'Банк Санкт-Петербург объявил финансовые результаты ...',
          article_url:
            'https://bcs-express.ru/novosti-i-analitika/bank-sankt-peterburg-uvelichil-pribyl-na-41-za-iv-kvartal-2017-g',
          rubric: 'Новости',
          rubric_url: 'https://bcs-express.ru/category/novosti',
          small_image_url: 'https://api.bcs.ru/resource/top_image/3596/1',
          medium_image_url: 'https://api.bcs.ru/resource/top_image/3596/2',
          big_image_url: 'https://api.bcs.ru/resource/top_image/3596/3',
          view_count: 244,
          comment_count: 0,
          like_count: 0
        },
        {
          id: 163987,
          access: 0,
          type: 'news',
          publish_date: '2018-03-22T11:25:00',
          nix_publish_date: 1521717900,
          title:
            'Краткосрочная продажа акций Сбербанка от зеркального сопротивления (SBER)',
          announce:
            'Светлана Спирина\\r\\nНезависимый эксперт\\r\\nКраткое ...',
          article_url:
            'https://bcs-express.ru/novosti-i-analitika/2018534913-kratkosrochnaia-prodazha-aktsii-sberbanka-ot-zerkal-nogo-soprotivleniia',
          rubric: 'Инвестидеи',
          rubric_url: 'https://bcs-express.ru/category/investidei',
          small_image_url: 'https://api.bcs.ru/resource/top_image/154/1',
          medium_image_url: 'https://api.bcs.ru/resource/top_image/154/2',
          big_image_url: 'https://api.bcs.ru/resource/top_image/154/3',
          view_count: 884,
          comment_count: 2,
          like_count: 0
        },
        {
          id: 163985,
          access: 0,
          type: 'news',
          publish_date: '2018-03-22T11:15:00',
          nix_publish_date: 1521717300,
          title: 'Тренд недели. Индекс МосБиржи болтается вокруг 2300',
          announce: 'Рынок акций\n\nРоссийский рынок акций в последние ...',
          article_url:
            'https://bcs-express.ru/novosti-i-analitika/trend-nedeli-indeks-mosbirzhi-boltaetsia-vokrug-2300',
          rubric: 'Российский рынок',
          rubric_url: 'https://bcs-express.ru/category/rossiyskiy-rynok',
          small_image_url: 'https://api.bcs.ru/resource/top_image/4024/1',
          medium_image_url: 'https://api.bcs.ru/resource/top_image/4024/2',
          big_image_url: 'https://api.bcs.ru/resource/top_image/4024/3',
          view_count: 287,
          comment_count: 1,
          like_count: 0
        }
      ]
    };
  },
  methods: {
    showMoreNews() {
      console.log('s m n');
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
