<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01008A, calcu00441A, calcu01405A, calcu01409B, calcu00428B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01008A(seed) - calcu00441A(seed) + calcu01405A(seed) - calcu01409B(seed) + calcu00428B(seed));
</script>

<template>
  <div class="blk">comp01567: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
