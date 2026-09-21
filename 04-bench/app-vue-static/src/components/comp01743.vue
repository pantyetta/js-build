<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu01468A, calcu00988B, calcu00712B, calcu00943B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01342B(seed) - calcu01468A(seed) + calcu00988B(seed) - calcu00712B(seed) + calcu00943B(seed));
</script>

<template>
  <div class="blk">comp01743: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(158 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(338 50% 50%);
  display: inline-block;
}
</style>
