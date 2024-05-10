<template>
  <div style="overflow: auto" size="large">
    <n-timeline horizontal>
      <n-timeline-item :content="props.beginContent" v-if="props.beginContent!=''"/>
      <n-timeline-item
        v-for="(item, index) in props.titleList"
        :key="index"
        :type="props.typeList[index]"
        :title="props.titleList[index]"
        :content="props.contentList[index]"
        :time="props.timeList[index]"
      />
      <n-timeline-item :content="props.endContent" v-if="props.endContent!=''"/>
    </n-timeline>
  </div>
</template>

<script setup>
import { NTimeline, NTimelineItem } from "naive-ui";
const props = defineProps({
  beginContent: {
    default: "default begin",
  },
  typeList: {
    default: ["success", "success"],
  },
  titleList: {
    default: ["default title1", "default title2"],
  },
  contentList: {
    default: ["default content1", "default content2"],
  },
  timeList: {
    default: ["2000-06-01", "2024-06-01"],
  },
  endContent: {
    default: "default end",
  },
});
</script>

<style lang="scss" scoped></style>
