<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01384B, calcu00400A, calcu00308B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01384B(seed) - calcu00400A(seed) + calcu00308B(seed));
</script>

<template>
  <div class="blk">comp01417: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(74 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(254 50% 50%);
  display: inline-block;
}
</style>
