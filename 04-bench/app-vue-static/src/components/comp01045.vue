<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01102A, calcu00863A, calcu01272A, calcu01377A, calcu00770B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01102A(seed) - calcu00863A(seed) + calcu01272A(seed) - calcu01377A(seed) + calcu00770B(seed));
</script>

<template>
  <div class="blk">comp01045: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>
