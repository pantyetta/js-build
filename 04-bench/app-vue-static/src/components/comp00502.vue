<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00036B, calcu00451A, calcu00193B, calcu00274A, calcu00477A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00036B(seed) - calcu00451A(seed) + calcu00193B(seed) - calcu00274A(seed) + calcu00477A(seed));
</script>

<template>
  <div class="blk">comp00502: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
