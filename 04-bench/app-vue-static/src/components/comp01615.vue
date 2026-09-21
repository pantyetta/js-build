<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00768A, calcu00103B, calcu01517A, calcu01438B, calcu00465A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00768A(seed) - calcu00103B(seed) + calcu01517A(seed) - calcu01438B(seed) + calcu00465A(seed));
</script>

<template>
  <div class="blk">comp01615: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(82 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(262 50% 50%);
  display: inline-block;
}
</style>
