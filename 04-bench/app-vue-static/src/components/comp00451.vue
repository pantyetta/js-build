<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00994B, calcu00532A, calcu00238A, calcu01408A, calcu01294B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00994B(seed) - calcu00532A(seed) + calcu00238A(seed) - calcu01408A(seed) + calcu01294B(seed));
</script>

<template>
  <div class="blk">comp00451: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(191 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(11 50% 50%);
  display: inline-block;
}
</style>
