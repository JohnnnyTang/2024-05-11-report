<template>
  <div
    class="img-back"
    :style="{ 'background-image': 'url(' + props.img + ')' }"
    :class="props.point"
  ></div>
</template>

<script setup>
const props = defineProps({
  img: String,
  point: {
    type: String,
    default: 'right'
  }
});
</script>

<style lang="scss" scoped>
div.img-back {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  &.down {
    transform: rotate(90deg);
  }
  &.up {
    transform: rotate(-90deg);
  }
  &.left {
    transform: rotate(180deg);
  }
}
</style>
