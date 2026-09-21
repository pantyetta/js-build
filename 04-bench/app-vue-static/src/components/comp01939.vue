<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00753B, calcu00830A, calcu00871B, calcu01449A, calcu01589A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00753B(seed) - calcu00830A(seed) + calcu00871B(seed) - calcu01449A(seed) + calcu01589A(seed));
</script>

<template>
  <div class="blk">comp01939: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(168 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(348 50% 50%);
  display: inline-block;
}
</style>
