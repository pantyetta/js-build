<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00833B, calcu00958B, calcu01383B, calcu01253A, calcu00684A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00833B(seed) - calcu00958B(seed) + calcu01383B(seed) - calcu01253A(seed) + calcu00684A(seed));
</script>

<template>
  <div class="blk">comp01333: {{ total }}</div>
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
