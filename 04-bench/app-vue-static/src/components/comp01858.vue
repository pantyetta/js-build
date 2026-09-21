<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00324B, calcu01467A, calcu01390A, calcu00731B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00324B(seed) - calcu01467A(seed) + calcu01390A(seed) - calcu00731B(seed));
</script>

<template>
  <div class="blk">comp01858: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(143 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(323 50% 50%);
  display: inline-block;
}
</style>
