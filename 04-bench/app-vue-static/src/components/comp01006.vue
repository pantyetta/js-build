<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00444B, calcu01302B, calcu00717A, calcu00824A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00444B(seed) - calcu01302B(seed) + calcu00717A(seed) - calcu00824A(seed));
</script>

<template>
  <div class="blk">comp01006: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(126 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(306 50% 50%);
  display: inline-block;
}
</style>
