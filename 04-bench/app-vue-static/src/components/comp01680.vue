<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01592B, calcu00270B, calcu00096A, calcu00819B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01592B(seed) - calcu00270B(seed) + calcu00096A(seed) - calcu00819B(seed));
</script>

<template>
  <div class="blk">comp01680: {{ total }}</div>
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
