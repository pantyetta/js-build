<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01178A, calcu00016B, calcu00662A, calcu00184B, calcu00882B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01178A(seed) - calcu00016B(seed) + calcu00662A(seed) - calcu00184B(seed) + calcu00882B(seed));
</script>

<template>
  <div class="blk">comp01142: {{ total }}</div>
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
