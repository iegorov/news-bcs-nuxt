<template>
  <article
    :style="{ backgroundImage: `url(${item.big_image_url})` }"
    class="news-item">
    <div class="news-item__rubric">
      <RubricTag
        :text="item.rubric"
        :url="item.rubric_url"/>
    </div>
    <div class="news-item__card">
      <div class="news-item__content">
        <h2 class="news-item__title">
          <a :href="item.article_url">{{ item.title }}</a>
        </h2>
      </div>
      <div class="news-item__footer">
        <div class="news-item__meta">
          <IconBase
            icon-name="eye"
            width="16"
            view-box="0 0 41 28"
            icon-color="#fff">
            <IconEye/>
          </IconBase><span>{{ item.view_count | shorten }}</span>
        </div>
        <div class="news-item__meta">
          <IconBase
            icon-name="question"
            icon-color="#fff">
            <IconQuestion/>
          </IconBase><span>{{ item.comment_count | shorten }}</span>
        </div>
        <div class="news-item__meta news-item__meta--publish">
          <IconBase
            icon-name="clock"
            icon-color="#fff">
            <IconClock/>
          </IconBase><span>{{ item.publish_date | fromNow }}</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import IconBase from '@/components/IconBase';
import IconClock from '@/components/icons/IconClock';
import IconEye from '@/components/icons/IconEye';
import IconQuestion from '@/components/icons/IconQuestion';
import RubricTag from '@/components/RubricTag';

/**
 * Новость
 * @typedef {Object} NewsItemFilled
 * @property {Date} publish_date
 * @property {string} title
 * @property {string} article_url
 * @property {string} rubric
 * @property {string} rubric_url
 * @property {string} big_image_url
 * @property {number} view_count
 * @property {number} comment_count
 */
export default {
  components: {
    IconBase,
    IconClock,
    IconEye,
    IconQuestion,
    RubricTag
  },
  props: {
    /**
     * @type {NewsItemFilled}
     */
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.news-item {
  position: relative;
  height: 100%;
  min-height: 380px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;

  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 4px;
    background-color: #2b2b51;
    opacity: 0.5;
    filter: alpha(Opacity=50);
  }

  &:hover::before {
    opacity: 0.7;
    filter: alpha(Opacity=70);
    transition: opacity .2s;
  }
}

.news-item__card {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.news-item__rubric {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 5;
}

.news-item__content {
  margin-bottom: 5px;
  padding: 25px;
  padding-bottom: 0px;
}

.news-item__title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  word-wrap: break-word;
  a {
    text-decoration: none;
    color: #fff;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 3;
    }
  }
}

.news-item__footer {
  display: flex;
  padding: 20px 25px;
  font-size: 11px;
}

.news-item__meta {
  font-weight: 700;
  font-size: 11px;
  color: #fff;

  & + & {
    margin-left: 20px;
    &--publish {
      margin-left: auto;
    }
  }

  svg {
    margin-right: 8px;
  }
}
</style>
