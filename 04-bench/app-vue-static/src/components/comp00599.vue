<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00675A, calcu01369A, calcu00014A, calcu00879B, calcu00487A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00675A(seed) - calcu01369A(seed) + calcu00014A(seed) - calcu00879B(seed) + calcu00487A(seed));
</script>

<template>
  <div class="blk">comp00599: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(345 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(165 50% 50%);
  display: inline-block;
}
</style>
