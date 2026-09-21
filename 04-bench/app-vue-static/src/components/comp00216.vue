<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00096B, calcu01313A, calcu00401B, calcu00384B, calcu01383B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00096B(seed) - calcu01313A(seed) + calcu00401B(seed) - calcu00384B(seed) + calcu01383B(seed));
</script>

<template>
  <div class="blk">comp00216: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(6 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(186 50% 50%);
  display: inline-block;
}
</style>
