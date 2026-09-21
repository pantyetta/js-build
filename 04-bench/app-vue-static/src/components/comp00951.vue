<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00824A, calcu00835B, calcu00192B, calcu00429A, calcu00923A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00824A(seed) - calcu00835B(seed) + calcu00192B(seed) - calcu00429A(seed) + calcu00923A(seed));
</script>

<template>
  <div class="blk">comp00951: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(37 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(217 50% 50%);
  display: inline-block;
}
</style>
