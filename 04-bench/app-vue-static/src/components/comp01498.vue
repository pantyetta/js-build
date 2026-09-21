<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00699B, calcu00254A, calcu00355A, calcu00600A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00699B(seed) - calcu00254A(seed) + calcu00355A(seed) - calcu00600A(seed));
</script>

<template>
  <div class="blk">comp01498: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(118 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(298 50% 50%);
  display: inline-block;
}
</style>
