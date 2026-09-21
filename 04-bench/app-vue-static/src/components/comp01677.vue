<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00121A, calcu00972B, calcu01245B, calcu00612A, calcu00941B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00121A(seed) - calcu00972B(seed) + calcu01245B(seed) - calcu00612A(seed) + calcu00941B(seed));
</script>

<template>
  <div class="blk">comp01677: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(316 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(136 50% 50%);
  display: inline-block;
}
</style>
