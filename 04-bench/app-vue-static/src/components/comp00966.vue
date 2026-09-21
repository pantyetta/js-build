<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00671A, calcu00068A, calcu00080B, calcu00366B, calcu00918B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00671A(seed) - calcu00068A(seed) + calcu00080B(seed) - calcu00366B(seed) + calcu00918B(seed));
</script>

<template>
  <div class="blk">comp00966: {{ total }}</div>
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
