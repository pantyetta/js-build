<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01061B, calcu01168A, calcu01359B, calcu01030A, calcu00245B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01061B(seed) - calcu01168A(seed) + calcu01359B(seed) - calcu01030A(seed) + calcu00245B(seed));
</script>

<template>
  <div class="blk">comp00014: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(161 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(341 50% 50%);
  display: inline-block;
}
</style>
