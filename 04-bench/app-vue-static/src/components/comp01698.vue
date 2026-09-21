<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01208B, calcu00096A, calcu00266A, calcu01579B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01208B(seed) - calcu00096A(seed) + calcu00266A(seed) - calcu01579B(seed));
</script>

<template>
  <div class="blk">comp01698: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
