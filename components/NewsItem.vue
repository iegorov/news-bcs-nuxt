<template>
  <article
    class="news-item"
    @mouseover="isVisibleFooter = true"
    @mouseleave="isVisibleFooter = false"
  >
    <div class="news-item__rubric">
      <RubricTag
        :text="item.rubric"
        :url="item.rubric_url" />
    </div>
    <div
      :style="{ backgroundImage: `url(${item.big_image_url})` }"
      class="news-item__thumb" />
    <div class="news-item__content">
      <h2 class="news-item__title">
        <a :href="item.article_url">{{ item.title }}</a>
      </h2>
      <div
        class="news-item__announce"
        v-html="announce"/>
    </div>
    <transition name="fade">
      <div
        v-show="isVisibleFooter"
        class="news-item__footer">
        <div class="news-item__meta">
          <IconBase
            icon-name="eye"
            width="16"
            view-box="0 0 41 28">
            <IconEye/>
          </IconBase><span>{{ item.view_count | shorten }}</span>
        </div>
        <div class="news-item__meta">
          <IconBase icon-name="question">
            <IconQuestion/>
          </IconBase><span>{{ item.comment_count | shorten }}</span>
        </div>
        <div class="news-item__meta news-item__meta--publish">
          <IconBase icon-name="clock">
            <IconClock/>
          </IconBase><span>{{ item.publish_date | fromNow }}</span>
        </div>
      </div>
    </transition>
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
 * @typedef {Object} NewsItem
 * @property {Date} publish_date
 * @property {string} title
 * @property {string} announce
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
     * @type {NewsItem}
     */
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isVisibleFooter: false
    };
  },
  computed: {
    announce() {
      return this.item.announce.replace(/(?:\r\n|\\r\\n|\r|\n)/g, '<br />');
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'scss/variables';

.news-item {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 380px;
  border-radius: 4px;
  background-color: #fff;
}

.news-item__rubric {
  position: absolute;
  top: 25px;
  left: 25px;
  z-index: 5;
}

.news-item__thumb {
  flex-grow: 1;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-size: cover;
  background-position: center;
}

.news-item__content {
  padding: 25px;
  line-height: 20px;
  color: #ababab;
}

.news-item__title {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 700;
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
  display: flex;
  margin-top: auto;
  padding: 20px 25px;
  border-top: 1px solid #f2f2f2;
  font-size: 11px;
  @media (max-width: $tablet - 1) {
    display: flex !important; // чтобы футер на мобиле и планшете был виден всегда
  }
}

.news-item__meta {
  font-size: 11px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


