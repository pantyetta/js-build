<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01455A, calcu00544B, calcu00175A, calcu00308A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01455A(seed) - calcu00544B(seed) + calcu00175A(seed) - calcu00308A(seed));
</script>

<template>
  <div class="blk">comp00696: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
