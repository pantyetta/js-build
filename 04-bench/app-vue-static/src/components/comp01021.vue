<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00832A, calcu01502A, calcu00946A, calcu00270A, calcu00957A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00832A(seed) - calcu01502A(seed) + calcu00946A(seed) - calcu00270A(seed) + calcu00957A(seed));
</script>

<template>
  <div class="blk">comp01021: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(306 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(126 50% 50%);
  display: inline-block;
}
</style>
