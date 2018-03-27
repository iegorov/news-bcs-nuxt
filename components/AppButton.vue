<template lang="pug">
  button.app-button(:type="type")
    slot
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style lang="scss" scoped>
$color: #ababab;

.app-button {
  display: block;
  width: 100%;
  padding: 20px 40px;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  transition: color 0.2s ease-in-out;
  color: $color;
  background-color: #fff;

  &:hover {
    color: darken($color, 20);
  }
}
</style>


