<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00896A, calcu01517B, calcu00210B, calcu00830A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00896A(seed) - calcu01517B(seed) + calcu00210B(seed) - calcu00830A(seed));
</script>

<template>
  <div class="blk">comp01400: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(104 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(284 50% 50%);
  display: inline-block;
}
</style>
