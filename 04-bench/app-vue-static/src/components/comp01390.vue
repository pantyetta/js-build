<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00994A, calcu01494B, calcu00630A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00994A(seed) - calcu01494B(seed) + calcu00630A(seed));
</script>

<template>
  <div class="blk">comp01390: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(50 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(230 50% 50%);
  display: inline-block;
}
</style>
