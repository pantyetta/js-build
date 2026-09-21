<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00313A, calcu00887B, calcu00963A, calcu00429A, calcu01356B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00313A(seed) - calcu00887B(seed) + calcu00963A(seed) - calcu00429A(seed) + calcu01356B(seed));
</script>

<template>
  <div class="blk">comp01516: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(21 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(201 50% 50%);
  display: inline-block;
}
</style>
