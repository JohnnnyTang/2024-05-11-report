<template>
  <div>
    <n-card :title="props.title">
      <template #cover v-if="props.img != ''">
        <img :src="props.img" />
      </template>
      {{ props.content }}
    </n-card>
  </div>
</template>

<script setup>
import { NCard } from "naive-ui";

const props = defineProps({
  title: {
    type: String,
    default: "default card title",
  },
  img: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "default card content",
  },
});
</script>

<style lang="scss" scoped>
.n-card-header {
  text-align: center;
}
</style>
