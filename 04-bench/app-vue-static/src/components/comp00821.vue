<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01286A, calcu00378B, calcu00422A, calcu01425A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01286A(seed) - calcu00378B(seed) + calcu00422A(seed) - calcu01425A(seed));
</script>

<template>
  <div class="blk">comp00821: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(29 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(209 50% 50%);
  display: inline-block;
}
</style>
