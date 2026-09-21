<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01361A, calcu00872B, calcu01344B, calcu00005B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01361A(seed) - calcu00872B(seed) + calcu01344B(seed) - calcu00005B(seed));
</script>

<template>
  <div class="blk">comp00799: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>
