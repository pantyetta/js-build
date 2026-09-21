<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01086A, calcu00311A, calcu01181B, calcu00576B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01086A(seed) - calcu00311A(seed) + calcu01181B(seed) - calcu00576B(seed));
</script>

<template>
  <div class="blk">comp00498: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>
