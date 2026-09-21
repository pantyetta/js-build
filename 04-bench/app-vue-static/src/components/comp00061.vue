<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00486B, calcu00304A, calcu00211B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00486B(seed) - calcu00304A(seed) + calcu00211B(seed));
</script>

<template>
  <div class="blk">comp00061: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(119 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(299 50% 50%);
  display: inline-block;
}
</style>
