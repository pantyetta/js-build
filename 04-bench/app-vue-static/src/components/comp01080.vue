<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00363A, calcu00275B, calcu01096B, calcu01294A, calcu01545A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00363A(seed) - calcu00275B(seed) + calcu01096B(seed) - calcu01294A(seed) + calcu01545A(seed));
</script>

<template>
  <div class="blk">comp01080: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>
