<template>
  <div
    :style="{'font-size': props.fontSize + 'rem', 'background-color': props.backgroundColor}"
    class="simple-text-card"
  >
    {{ props.text }}
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "default text",
  },
  fontSize: {
    type: String,
    default: "5",
  },
  backgroundColor: {
    type: String,
    default: "gray",
  },
});
</script>

<style lang="scss" scoped>
.simple-text-card {
  padding: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(8px);
  width: fit-content;
}
</style>
