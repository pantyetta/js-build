<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01485B, calcu00308A, calcu01233B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01485B(seed) - calcu00308A(seed) + calcu01233B(seed));
</script>

<template>
  <div class="blk">comp01879: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(104 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(284 50% 50%);
  display: inline-block;
}
</style>
