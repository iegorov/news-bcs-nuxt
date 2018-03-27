<template lang="pug">
  article.news-item
    a.news-item__rubric(
      :href="item.rubric_url"
      :class="`news-item__rubric--${categoryName}`"
    )
      | {{ item.rubric }}
    .news-item__thumb(
      :style="{ backgroundImage: `url(${item.big_image_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    )
    .news-item__content
      h2.news-item__title
        a(:href="item.article_url") {{ item.title }}
      div.news-item__announce(v-html="announce")
    .news-item__footer
      .news-item__meta
        IconBase(
          icon-name="eye"
          width="16"
          view-box="0 0 41 28"
        )
          IconEye
        span {{ item.view_count }}
      .news-item__meta
        IconBase(icon-name="question")
          IconQuestion
        span {{ item.comment_count }}
      .news-item__meta.news-item__meta--publish
        IconBase(icon-name="clock")
          IconClock
        span {{ item.publish_date }}
</template>

<script>
import IconBase from '@/components/IconBase';
import IconClock from '@/components/icons/IconClock';
import IconEye from '@/components/icons/IconEye';
import IconQuestion from '@/components/icons/IconQuestion';

export default {
  components: { IconBase, IconClock, IconEye, IconQuestion },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    announce() {
      return this.item.announce.replace(/(?:\r\n|\\r\\n|\r|\n)/g, '<br />');
    },
    categoryName() {
      return this.item.rubric_url.split('/').pop();
    }
  }
};
</script>

<style lang="scss" scoped>
.news-item {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 380px;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    .news-item__footer {
      display: flex;
    }
  }
}

.news-item__rubric {
  position: absolute;
  top: 24px;
  left: 24px;
  display: inline-block;
  padding: 5px;
  border-radius: 4px;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #2b2b51;
  background-color: #fff;
  z-index: 999;

  &--tehanaliz {
    color: #fff;
    background-color: #0073f0;
  }
  &--mirovye-rynki,
  &--valyutnyy-rynok,
  &--rossiyskiy-rynok,
  &--rynok-nefti {
    color: #fff;
    background-color: #4ed669;
  }
  &--torgovye-rekomendacii,
  &--investidei,
  &--srednesrochnye-trendy {
    color: #fff;
    background-color: #f0b500;
  }
}

.news-item__thumb {
  flex-grow: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.news-item__content {
  padding: 30px 25px;
  line-height: 20px;
  color: #ababab;
}

.news-item__title {
  margin-top: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #2b2b51;
  word-wrap: break-word;
  a {
    text-decoration: none;
    color: #2b2b51;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
  }
}

.news-item__announce {
  word-wrap: break-word;
}

.news-item__footer {
  display: none;
  margin-top: auto;
  padding: 20px 25px;
  border-top: 1px solid #f2f2f2;
  font-size: 11px;
}

.news-item__meta {
  font-style: 11px;
  line-height: 20px;
  color: #9b9b9c;

  & + & {
    margin-left: 20px;
    &--publish {
      margin-left: auto;
    }
  }

  svg {
    margin-right: 5px;
  }
}
</style>


