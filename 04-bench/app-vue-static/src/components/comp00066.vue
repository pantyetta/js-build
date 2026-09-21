<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01373A, calcu00549B, calcu00747A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01373A(seed) - calcu00549B(seed) + calcu00747A(seed));
</script>

<template>
  <div class="blk">comp00066: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(87 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(267 50% 50%);
  display: inline-block;
}
</style>
