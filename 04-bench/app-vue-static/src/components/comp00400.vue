<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01343B, calcu01284A, calcu00650A, calcu00830A, calcu00483A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01343B(seed) - calcu01284A(seed) + calcu00650A(seed) - calcu00830A(seed) + calcu00483A(seed));
</script>

<template>
  <div class="blk">comp00400: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(311 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(131 50% 50%);
  display: inline-block;
}
</style>
