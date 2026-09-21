<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- 40 ページを全部静的 import。import() は 1 つも使わない（コード分割なし・単一バンドル）。 -->
<script setup>
import { ref, shallowRef } from 'vue';
import Page00 from './pages/page00.vue';
import Page01 from './pages/page01.vue';
import Page02 from './pages/page02.vue';
import Page03 from './pages/page03.vue';
import Page04 from './pages/page04.vue';
import Page05 from './pages/page05.vue';
import Page06 from './pages/page06.vue';
import Page07 from './pages/page07.vue';
import Page08 from './pages/page08.vue';
import Page09 from './pages/page09.vue';
import Page10 from './pages/page10.vue';
import Page11 from './pages/page11.vue';
import Page12 from './pages/page12.vue';
import Page13 from './pages/page13.vue';
import Page14 from './pages/page14.vue';
import Page15 from './pages/page15.vue';
import Page16 from './pages/page16.vue';
import Page17 from './pages/page17.vue';
import Page18 from './pages/page18.vue';
import Page19 from './pages/page19.vue';
import Page20 from './pages/page20.vue';
import Page21 from './pages/page21.vue';
import Page22 from './pages/page22.vue';
import Page23 from './pages/page23.vue';
import Page24 from './pages/page24.vue';
import Page25 from './pages/page25.vue';
import Page26 from './pages/page26.vue';
import Page27 from './pages/page27.vue';
import Page28 from './pages/page28.vue';
import Page29 from './pages/page29.vue';
import Page30 from './pages/page30.vue';
import Page31 from './pages/page31.vue';
import Page32 from './pages/page32.vue';
import Page33 from './pages/page33.vue';
import Page34 from './pages/page34.vue';
import Page35 from './pages/page35.vue';
import Page36 from './pages/page36.vue';
import Page37 from './pages/page37.vue';
import Page38 from './pages/page38.vue';
import Page39 from './pages/page39.vue';

const pages = [
  Page00,
  Page01,
  Page02,
  Page03,
  Page04,
  Page05,
  Page06,
  Page07,
  Page08,
  Page09,
  Page10,
  Page11,
  Page12,
  Page13,
  Page14,
  Page15,
  Page16,
  Page17,
  Page18,
  Page19,
  Page20,
  Page21,
  Page22,
  Page23,
  Page24,
  Page25,
  Page26,
  Page27,
  Page28,
  Page29,
  Page30,
  Page31,
  Page32,
  Page33,
  Page34,
  Page35,
  Page36,
  Page37,
  Page38,
  Page39,
];
const current = ref(0);
const currentPage = shallowRef(pages[0]);

function select(i) {
  current.value = i;
  currentPage.value = pages[i];
}
</script>

<template>
  <div>
    <nav>
      <button
        v-for="(_, i) in pages"
        :key="i"
        type="button"
        @click="select(i)"
      >page {{ i }}</button>
    </nav>
    <component :is="currentPage" />
  </div>
</template>
