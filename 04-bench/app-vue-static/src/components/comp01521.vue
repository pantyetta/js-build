<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00410B, calcu00824A, calcu00702B, calcu00282A, calcu01119B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00410B(seed) - calcu00824A(seed) + calcu00702B(seed) - calcu00282A(seed) + calcu01119B(seed));
</script>

<template>
  <div class="blk">comp01521: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>
