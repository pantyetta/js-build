<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00011A, calcu00096A, calcu01499A, calcu00516B, calcu01342A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00011A(seed) - calcu00096A(seed) + calcu01499A(seed) - calcu00516B(seed) + calcu01342A(seed));
</script>

<template>
  <div class="blk">comp01684: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
