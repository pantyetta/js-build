<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00705B, calcu00207A, calcu00985A, calcu01302A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00705B(seed) - calcu00207A(seed) + calcu00985A(seed) - calcu01302A(seed));
</script>

<template>
  <div class="blk">comp00756: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>
