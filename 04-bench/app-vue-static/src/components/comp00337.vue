<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01121B, calcu00611A, calcu00283A, calcu00130B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu01121B(seed) - calcu00611A(seed) + calcu00283A(seed) - calcu00130B(seed));
</script>

<template>
  <div class="blk">comp00337: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(265 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(85 50% 50%);
  display: inline-block;
}
</style>
