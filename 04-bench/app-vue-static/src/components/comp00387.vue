<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01582B, calcu00328A, calcu00604A, calcu00161B, calcu00485B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01582B(seed) - calcu00328A(seed) + calcu00604A(seed) - calcu00161B(seed) + calcu00485B(seed));
</script>

<template>
  <div class="blk">comp00387: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
