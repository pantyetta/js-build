<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01448B, calcu00274A, calcu01400B, calcu00852B, calcu00558A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01448B(seed) - calcu00274A(seed) + calcu01400B(seed) - calcu00852B(seed) + calcu00558A(seed));
</script>

<template>
  <div class="blk">comp00176: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
