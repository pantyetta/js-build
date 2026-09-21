<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01143B, calcu00422A, calcu01136A, calcu00278B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01143B(seed) - calcu00422A(seed) + calcu01136A(seed) - calcu00278B(seed));
</script>

<template>
  <div class="blk">comp00539: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(14 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(194 50% 50%);
  display: inline-block;
}
</style>
