<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00823A, calcu00416A, calcu00528B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00823A(seed) - calcu00416A(seed) + calcu00528B(seed));
</script>

<template>
  <div class="blk">comp01509: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(85 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(265 50% 50%);
  display: inline-block;
}
</style>
