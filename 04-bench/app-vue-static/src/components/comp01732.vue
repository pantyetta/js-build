<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00468B, calcu00808A, calcu01036B, calcu00901B, calcu01537A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00468B(seed) - calcu00808A(seed) + calcu01036B(seed) - calcu00901B(seed) + calcu01537A(seed));
</script>

<template>
  <div class="blk">comp01732: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
