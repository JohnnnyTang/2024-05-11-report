---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
layout: cover
background-color: https://cover.sli.dev
# some information about your slides, markdown enabled
title: 组会汇报-汤子豪
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply any unocss classes to the current slide
class: "text-black text-cover bg-white pos-relative z-1"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-up
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
colorSchema: 'light'
---

# 在琐碎工作中寻找乐趣

学习与工作经验分享

<!-- <div class="absolute w-100vw h-100vh bg-white"></div> -->
<img src="/logo_black&blue.png" class="absolute top-1 left-3 w-25"/>
<div class="w-0.2vw h-3vh bg-light-blue b-rd"></div>
<div class="font-mono relative w-80 left-3 top--3vh h-3vh line-height-3vh">
汇报人：汤子豪
</div>
<div class="absolute w-80 h-80 border-round right-8 top-20 bg-no-repeat round-bg bg-white b-solid border-4 border-white z-4"></div>
<div class="absolute w-42 h-42 b-rd-tr-100% right-6 top-18 bg-transparent b-t-4 b-r-4 border-lightblue z-3"></div>
<div class="absolute w-42 h-42 b-rd-bl-100% right-48 top-60 bg-transparent b-b-4 b-l-4 border-lightblue z-3"></div>
<div class="opacity-50 absolute bottom-8 color-sky">
2024-05-11
</div>
<div class="absolute w-25 h-100% b-rd-10 bg-white top-0 right-50 z-2"></div>
<div class="absolute w-60 h-100% bg-blue top-0 right-0 z-1"></div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: slide-up
class: "text-black bg-white"
---

# 0. 前情提要-崩岸监测预警与信息资源树

<div>
  <img 
    class="absolute top-20 left-7 w-230 opacity-100"
    src="/tree.png"
    alt=""
  />
</div>
<div class="absolute left-74 bottom-2 color-blue-6" v-click>
  <SimpleTextCard fontSize="1.4" text="仙林宾馆闭关" backgroundColor="rgba(127,197,253, 0.5)"/>
</div>
<div class="absolute right-118 bottom-5 color-blue-6 w-10 h-10" v-after>
  <CustomArrow img="/right-arrow.png"/>
</div>
<div class="absolute right-98 bottom-2 color-blue-6" v-after>
  <SimpleTextCard fontSize="1.4" text="V0.1" backgroundColor="rgba(127,197,253, 0.5)"/>
</div>


---
transition: slide-up
class: "text-black bg-white"
---

# 1. 江苏省长江崩岸预警监测系统 V0.2

<div v-click.hide>
  <img 
    class="absolute top-20 left-7 h-110 opacity-100"
    src="/sysDesign.png"
    alt=""
  />
  <span class="absolute top-22 left-40 h-110 opacity-100 font-size-6 color-blue-4">v2系统概念设计：</span>
</div>
<div v-after>
  <img 
    class="absolute top-30 left-7 w-160 opacity-100"
    src="/sysRes.png"
    alt=""
  />
  <span class="absolute top-20 left-40 h-110 opacity-100 font-size-6 color-blue-4">v2系统实现：</span>
</div>
<div class="absolute right-4 top-60 color-blue-6" v-after>
  <SimpleTextCard fontSize="1.8" text="带着Team又冲了一波" backgroundColor="rgba(127,197,253, 0.75)"/>
</div>


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  color: black;
}
p {
  opacity: 1;
}
</style>

<!--
Here is another comment.
-->

---
transition: slide-up
level: 2
class: "text-black bg-white"
---

# 1.1 江苏省长江崩岸预警监测系统 V0.2

v0.2部署版本链接 [打开网页](http://119.45.198.54/)

<div class="absolute top-24 left-20 h-110 w-200 opacity-100">
  <iframe
    src="http://119.45.198.54/"
    class="absolute h-100% w-100%"
    title="江苏省长江崩岸监测预警应用系统"
  >
  </iframe>
</div>

---
src: ./pages/exp.md
---

---
src: ./pages/exp-next.md
hideInToc: true
---

---
transition: slide-up
level: 2
class: "text-black bg-white"
---

# 1.2 V0.2 Plus
<h1></h1>
<span 
  v-mark.circle.red="+1" 
  class="absolute color-transparent fw-bold font-size-10 z-5 span-circle top-30 right-56 z-5 h-28"
>PlusAAa
</span>
<div class="absolute top-28 left-10 z-10 font-size-6 fw-bold bg-bluegray-1 p-4 border-rd z-4">
  <CustomTimeLine beginContent="水科院驻场开发" endContent="To be continued..." :titleList="titleList" :contentList="contentList" :timeList="timeList" :typeList="typeList"/>
</div>

<img
  v-click
  class="absolute top-40 right-77 w-100 opacity-50 transform-rotate-20"
  src="/arrow.svg"
  alt=""
/>

<h1 class="absolute top-82" v-after>心态发生了
  <span v-mark.circle.blue="+1" class="color-blue-4">一点点</span>
变化
</h1>
<div v-click class="absolute bottom-24 left-12 z-10 font-size-6 fw-bold bg-blue-1 p-4 border-rd">
带着Team冲了一波又一波
</div>
<div v-after class="absolute bottom-4 left-12 z-10 font-size-6 fw-bold bg-blue-1 p-4 border-rd">
但是下一波永远比最后一波先来
</div>

<!-- <ModelFlow /> -->
<div class="absolute right-68 bottom-5 color-blue-6 w-50 h-72" v-click>
  <CustomArrow img="/circle.png"/>
</div>
<p class="absolute right-12 bottom-55 color-blue-6 font-size-4.5" v-after>做出来才有需求的想象空间</p>

<img
  class="absolute bottom-40 right-40 w-24 opacity-100 -transform-rotate-15"
  src="/arrow.svg"
  alt=""
  v-click
/>

<div class="absolute right-50 bottom-24 color-blue-6 fw-bold" v-after>
  <SimpleTextCard fontSize="1.0" text="一乙到底" backgroundColor="rgba(127,197,253, 0.75)"/>
</div>

<img
  class="absolute bottom-40 right-12 w-24 opacity-100 -transform-rotate-105"
  src="/arrow.svg"
  alt=""
  v-after
/>

<div class="absolute right-4 bottom-24 color-blue-6 fw-bold" v-after>
  <SimpleTextCard fontSize="1.0" text="与甲为伍" backgroundColor="rgba(127,197,253, 0.75)"/>
</div>

<script setup lang="ts">
import { ref } from 'vue';

const titleList = ref(["入场", "单指标预警", "多指标风险计算", "V0.2 Plus", "给水利厅领导展示"]);
const contentList = ref(["讨论...", "完成", "完成", "完成", "甲方..."]);
const timeList = ref(["04-23", "04-25", "04-27", "04-28", "04-29"]);
const typeList = ref(["info", "success", "success", "success", "warning"]);
</script>


---
transition: slide-up
level: 2
class: "text-black bg-white"
layout: image
image: /sysChange.png
backgroundSize: 75% 75%
---

# 1.2 V0.2 调整思路

<style>
h1 {
  color: black;
}
</style>


---
preload: false
transition: slide-up
level: 1
---

# 2. Slidev 使用体验

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
      alt=""
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
      alt=""
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 1500, duration: 500 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 2500 } }">
</div>

<Toc class="absolute right-4 top-0 z-3"/>

<div class="absolute left-20 top-54 font-size-5 color-black flex flex-col color-green-6">
  <p class="font-size-5 fw-bold">优点</p>
  <p>- 功能强大、全面</p>
  <p>- 更加灵活 使用Vue生态</p>
  <p>- 利用前端技术 产生无限可能性</p>
  <p>- 开源社区 总有一款主题适合你</p>
  <p>- 学习成本适中</p>
</div>
<div class="absolute right-40 top-54 font-size-5 color-black flex flex-col color-red-6 z-2 bg-transparent">
  <p class="font-size-5 fw-bold w-fit">缺点</p>
  <p>- 基础内容制作不如PPT快 制作耗时较长</p>
  <p>- 需要有耐心写组件 积累才能增加效率</p>
  <p>- 引入一些前端库时 还是会有bug</p>
  <p>- markdown里写vue需要配置插件</p>
  <p>- 做到现在我还没考虑以什么形式部署汇报</p>
</div>


---
transition: slide-up
level: 2
class: "text-black bg-white"
---

<div class="absolute left-30 bottom-34 color-blue-6 fw-bold w-80 border-4">
  <SimpleCard fontSize="1.0" title="崩岸系统V0.2+" content="继续开发" img="/sys.png"/>
</div>

<div class="absolute right-30 bottom-34 color-blue-6 fw-bold w-80 border-4">
  <SimpleCard fontSize="1.0" title="科研活动" content="重拾再出发"/>
</div>
<div class="absolute right-30 bottom-63 color-blue-6 fw-bold w-80 h-40 border-4">
  <SimpleCard fontSize="1.0" title="" content=""/>
</div>
<div class="absolute right-51 bottom-65 color-blue-6 fw-bold w-36 h-36">
  <img src="/cross.png" alt="" class="object-contain">
</div>

# 3 后续安排

<style>
h1 {
  color: black;
}
</style>


---
transition: slide-up
level: 2
class: "text-black bg-white"
---

#
<img src="/logo_black&blue.png" class="absolute top-1 left-3 w-25"/>

<div class="absolute font-mono w-200 -left-3 top-16 h-72 line-height-5 bg-lightblue-4 border-rd-xl"/>

<div class="absolute font-mono left-10 top-26 color-white fw-bold font-sans font-size-12 font-italic">谢谢大家</div>
<div class="absolute font-mono left-10 top-52 color-white font-sans font-size-8">相信过程，无限进步</div>
<div class="absolute font-mono left-10 top-64 color-white font-sans font-size-8">——学习与工作经验分享</div>

<div class="absolute font-mono w-1 left-3 bottom-24 h-13 line-height-5 bg-blue-5 border-rd-xl"/>

<div class="absolute font-mono w-80 left-6 bottom-28 h-5 line-height-5">
汇报人：汤子豪
</div>

<div class="opacity-50 absolute bottom-8 color-sky">
2024-05-11
</div>

<style>
h1 {
  color: black;
}
</style>