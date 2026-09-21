<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00238B, calcu00256B, calcu00792B, calcu00773A, calcu00908B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00238B(seed) - calcu00256B(seed) + calcu00792B(seed) - calcu00773A(seed) + calcu00908B(seed));
</script>

<template>
  <div class="blk">comp01785: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
