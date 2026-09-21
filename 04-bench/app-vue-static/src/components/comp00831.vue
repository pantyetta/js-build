<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01269A, calcu00468B, calcu01488A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01269A(seed) - calcu00468B(seed) + calcu01488A(seed));
</script>

<template>
  <div class="blk">comp00831: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>
