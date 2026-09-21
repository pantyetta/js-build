<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00003B, calcu01116A, calcu00128A, calcu00413A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00003B(seed) - calcu01116A(seed) + calcu00128A(seed) - calcu00413A(seed));
</script>

<template>
  <div class="blk">comp01700: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(114 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(294 50% 50%);
  display: inline-block;
}
</style>
