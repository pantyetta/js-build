<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01253B, calcu00912B, calcu00802B, calcu00486A, calcu00239A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01253B(seed) - calcu00912B(seed) + calcu00802B(seed) - calcu00486A(seed) + calcu00239A(seed));
</script>

<template>
  <div class="blk">comp00790: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(302 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(122 50% 50%);
  display: inline-block;
}
</style>
