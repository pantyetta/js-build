<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00791A, calcu00580A, calcu00823A, calcu00908A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00791A(seed) - calcu00580A(seed) + calcu00823A(seed) - calcu00908A(seed));
</script>

<template>
  <div class="blk">comp01668: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(99 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(279 50% 50%);
  display: inline-block;
}
</style>
