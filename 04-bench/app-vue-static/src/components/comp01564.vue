<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00363A, calcu01299B, calcu01552B, calcu00788A, calcu00657A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00363A(seed) - calcu01299B(seed) + calcu01552B(seed) - calcu00788A(seed) + calcu00657A(seed));
</script>

<template>
  <div class="blk">comp01564: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
