<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00817B, calcu00841A, calcu00467A, calcu00744A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00817B(seed) - calcu00841A(seed) + calcu00467A(seed) - calcu00744A(seed));
</script>

<template>
  <div class="blk">comp00445: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>
