<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00808A, calcu00533B, calcu01349A, calcu00049A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00808A(seed) - calcu00533B(seed) + calcu01349A(seed) - calcu00049A(seed));
</script>

<template>
  <div class="blk">comp01365: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(94 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(274 50% 50%);
  display: inline-block;
}
</style>
