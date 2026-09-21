<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00808A, calcu00977B, calcu01003A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00808A(seed) - calcu00977B(seed) + calcu01003A(seed));
</script>

<template>
  <div class="blk">comp01406: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
