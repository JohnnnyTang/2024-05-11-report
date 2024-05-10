<template>
  <div>
    <n-image-group>
      <n-space>
        <n-image
          v-for="(img, index) in props.imgList"
          :key="index"
          :width="props.widthList[index]"
          :src="img"
          preview-disabled
        />
      </n-space>
    </n-image-group>
  </div>
</template>

<script setup>
import { NImageGroup, NImage, NSpace } from "naive-ui";
const props = defineProps({
  imgList: {
    default: [],
  },
  widthList: {
    default: [],
  },
});
</script>

<style lang="scss" scoped>
:deep(.n-space) {
    align-items: center;
    div {
        height: fit-content !important;
    }
}
</style>
