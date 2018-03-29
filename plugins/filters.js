import Vue from 'vue';
import * as moment from 'moment';
import 'moment/locale/ru';

Vue.filter('fromNow', date => {
  if (!date) return '';
  const twentyFourHours = 86400000; // одни сутки
  const targetDate = moment(date);

  if (moment() - targetDate < twentyFourHours) {
    return targetDate.fromNow();
  }

  return targetDate.format('DD MMM YYYY');
});
