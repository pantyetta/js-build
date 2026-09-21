<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00983A, calcu01192B, calcu00991B, calcu01422B, calcu00229A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00983A(seed) - calcu01192B(seed) + calcu00991B(seed) - calcu01422B(seed) + calcu00229A(seed));
</script>

<template>
  <div class="blk">comp01650: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(359 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(179 50% 50%);
  display: inline-block;
}
</style>
