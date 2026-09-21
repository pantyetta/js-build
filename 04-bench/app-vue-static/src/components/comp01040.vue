<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00283A, calcu00635B, calcu01096B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00283A(seed) - calcu00635B(seed) + calcu01096B(seed));
</script>

<template>
  <div class="blk">comp01040: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
