<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00636A, calcu01498A, calcu00170B, calcu00346B, calcu01129A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00636A(seed) - calcu01498A(seed) + calcu00170B(seed) - calcu00346B(seed) + calcu01129A(seed));
</script>

<template>
  <div class="blk">comp01272: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(16 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(196 50% 50%);
  display: inline-block;
}
</style>
