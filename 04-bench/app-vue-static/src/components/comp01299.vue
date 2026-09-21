<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00429A, calcu00497B, calcu00668B, calcu00130B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00429A(seed) - calcu00497B(seed) + calcu00668B(seed) - calcu00130B(seed));
</script>

<template>
  <div class="blk">comp01299: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(181 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(1 50% 50%);
  display: inline-block;
}
</style>
