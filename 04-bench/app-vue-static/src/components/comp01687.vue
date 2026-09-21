<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00161B, calcu00788B, calcu00072A, calcu01486A, calcu01270B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00161B(seed) - calcu00788B(seed) + calcu00072A(seed) - calcu01486A(seed) + calcu01270B(seed));
</script>

<template>
  <div class="blk">comp01687: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
