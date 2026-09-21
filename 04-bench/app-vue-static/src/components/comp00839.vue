<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01248B, calcu00954A, calcu01481B, calcu01387B, calcu00933B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01248B(seed) - calcu00954A(seed) + calcu01481B(seed) - calcu01387B(seed) + calcu00933B(seed));
</script>

<template>
  <div class="blk">comp00839: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(103 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(283 50% 50%);
  display: inline-block;
}
</style>
