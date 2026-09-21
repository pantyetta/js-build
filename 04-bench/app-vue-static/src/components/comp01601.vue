<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00070A, calcu00484B, calcu00097A, calcu00213A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00070A(seed) - calcu00484B(seed) + calcu00097A(seed) - calcu00213A(seed));
</script>

<template>
  <div class="blk">comp01601: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(149 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(329 50% 50%);
  display: inline-block;
}
</style>
