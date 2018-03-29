<template lang="pug">
  a.rubric(
    :href="url"
    :class="`rubric--${categoryName}`"
  )
    | {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    categoryName() {
      return this.url.split('/').pop();
    }
  }
};
</script>

<style lang="scss" scoped>
.rubric {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 4px;
  font-size: 10px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #2b2b51;
  background-color: #fff;

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
</style>


