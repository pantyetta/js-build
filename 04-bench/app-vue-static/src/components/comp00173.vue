<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00095B, calcu00016B, calcu00324A, calcu01245A, calcu01346B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00095B(seed) - calcu00016B(seed) + calcu00324A(seed) - calcu01245A(seed) + calcu01346B(seed));
</script>

<template>
  <div class="blk">comp00173: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(110 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(290 50% 50%);
  display: inline-block;
}
</style>
