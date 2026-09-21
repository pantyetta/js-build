<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00918B, calcu01363A, calcu00786B, calcu00729A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00918B(seed) - calcu01363A(seed) + calcu00786B(seed) - calcu00729A(seed));
</script>

<template>
  <div class="blk">comp01128: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>
