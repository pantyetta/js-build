<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01552B, calcu00371A, calcu00484A, calcu00534B, calcu01429A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01552B(seed) - calcu00371A(seed) + calcu00484A(seed) - calcu00534B(seed) + calcu01429A(seed));
</script>

<template>
  <div class="blk">comp00551: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(136 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(316 50% 50%);
  display: inline-block;
}
</style>
