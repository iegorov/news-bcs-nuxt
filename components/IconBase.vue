<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation">
    <title
      :id="iconName"
      lang="en">
      {{ iconName }} icon
    </title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 12
    },
    height: {
      type: [Number, String],
      default: 12
    },
    viewBox: {
      type: String,
      default: '0 0 28 28'
    },
    iconColor: {
      type: String,
      default: '#9b9b9c'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
