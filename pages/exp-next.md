---
transition: slide-up
level: 2
class: "text-black bg-white"
---

# 1.1 系统数据工作经验分享

<div
  class="relative top-0 left-12 color-gray-4 font-size-5"
>
工程数据与常规矢量数据
</div>

<div>
  <img 
    class="absolute top-6 right-7 w-110 opacity-100"
    src="/qgis-dxf-plugin.png"
    alt=""
  />
  <p class="absolute top-28 left-28 w-110 opacity-100 color-white fw-bold font-size-5">CAD原始数据</p>
</div>

<div>
  <img 
    class="absolute top-28 left-7 w-110 opacity-100"
    src="/cad-data.png"
    alt=""
  />
  <p class="absolute top-28 left-28 w-110 opacity-100 color-white fw-bold font-size-5">CAD原始数据</p>
</div>
<div>
  <img 
    class="absolute top-78 left-7 w-110 opacity-100"
    src="/cad-data-in-qgis.png"
    alt=""
  />
  <p class="absolute top-78 left-28 w-110 opacity-100 color-black fw-bold font-size-5">QGIS中打开</p>
</div>
<div>
  <img 
    class="absolute bottom-2 left-7 w-110 opacity-100"
    src="/cad-qgis-ram.png"
    alt=""
  />
</div>
<p class="absolute top-64 left-72 opacity-100 color-white fw-bold font-size-5">大量数据无法加载</p>
<p class="absolute top-78 left-72 opacity-100 color-black fw-bold font-size-5">最高20W+要素个数</p>

<p class="absolute top-22 right-12 opacity-100 color-black fw-bold font-size-6">不知道QGIS/插件里发生了什么</p>
<div class="absolute w-16 h-16 top-34 right-44 opacity-100 color-black fw-bold font-size-6">
  <CustomArrow img="https://johnnnytang.github.io/2024-05-11-report/right-arrow.png" point="down"/>
</div>
<p class="absolute top-48 right-19 opacity-100 color-black fw-bold font-size-6 color-blue-8">把控制权掌握在自己手中</p>
<div class="absolute w-16 h-16 top-61 right-44 opacity-100 color-black fw-bold font-size-6">
  <CustomArrow img="https://johnnnytang.github.io/2024-05-11-report/right-arrow.png" point="down"/>
</div>
<div class="absolute top-76 right-24 opacity-100 color-black fw-bold font-size-6">
  <ImageRow :imgList="imgList" :widthList="widthList"/>
</div>

<div class="absolute bottom-1 right-32 opacity-100 color-black fw-bold font-size-5">
- LINE and POLYLINE
<br>
- CIRCLE and ARC
<br>
- TEXT and MTEXT
<br>
- HATCH
<br>
- DIMENSION
<br>
- INSERT
</div>

<div class="absolute w-10 h-10 bottom-18 right-22 opacity-100 color-black fw-bold font-size-5 bg-cover bg-no-repeat" style="background-image: url('/add.png'); transform: rotate(45deg);"></div>
<div class="absolute w-10 h-10 bottom-22 right-8 opacity-100 color-blue-5 fw-bold  bg-cover bg-no-repeat font-size-13 font-serif">N</div>

<!-- <div class="absolute bottom-56 right-80 opacity-100 color-blue-6 flex">
  <SimpleTextCard class="color-red-2" backgroundColor="rgba(253,87,83, 0.8)" text="数据量++" fontSize="2"/>
  <SimpleTextCard backgroundColor="rgba(127,197,253, 0.75)" text="精神力--" fontSize="2"/>
</div> -->

```ts {all|2|3|4|5|all}
while(待处理数据) {
  {待处理数据}--
  {数据量}++
  {精神力}--
  {开发热情}--
}
```

<div class="absolute w-48 h-48 top-58 left-106 opacity-100 color-black fw-bold font-size-6" v-click>
  <CustomArrow img="https://johnnnytang.github.io/2024-05-11-report/close.png"/>
</div>


<div class="absolute w-70 h-68 top-54 left-96 opacity-100 bg-white z-2" v-click>
</div>

<div class="absolute right-84 top-56 color-blue-6 z-3" v-after>
  <SimpleTextCard fontSize="1.8" text="深陷干活的旋涡" backgroundColor="rgba(194,223,235, 1)"/>
</div>



<div class="absolute w-18 h-18 top-74 left-122 opacity-100 color-black fw-bold font-size-6 z-3" v-click>
  <CustomArrow img="https://johnnnytang.github.io/2024-05-11-report/right-arrow.png" point="down"/>
</div>

<div class="absolute right-80 top-91 color-blue-6 z-3" v-after>
  <SimpleTextCard fontSize="1.8" text="多停下来总结思考" backgroundColor="rgba(194,223,235, 1)"/>
</div>

<script setup lang="ts">
import { ref } from 'vue'
const imgList = ref(['https://johnnnytang.github.io/2024-05-11-report/python.png', 'https://johnnnytang.github.io/2024-05-11-report/add.png', 'https://johnnnytang.github.io/2024-05-11-report/ezdxf.png'])

const widthList = ref(['50rem', '30rem', '100rem'])

</script>

<style>
ul {
  position: absolute;
  width: fit-content;
  right: 6rem;
  bottom: 0.5rem;
}
pre {
  width: fit-content;
  --shiki-dark-bg: #dbd7caee;
  --shiki-dark: #121212;
}

.slidev-code-wrapper {
  width: fit-content;
  position: absolute;
  left: 26rem;
  top: 14rem;
  --prism-font-size: 1.2rem;
}
</style>

<!-- <AutoFitText 
  :max="200" 
  :min="5" 
  modelValue="Some text"
  class="absolute top-64 left-72 w-40 opacity-100 color-black fw-bold"
/> -->

