<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01253B, calcu00225B, calcu00519B, calcu01014B, calcu01277A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01253B(seed) - calcu00225B(seed) + calcu00519B(seed) - calcu01014B(seed) + calcu01277A(seed));
</script>

<template>
  <div class="blk">comp01110: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(225 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(45 50% 50%);
  display: inline-block;
}
</style>
