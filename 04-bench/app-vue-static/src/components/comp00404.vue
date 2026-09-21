<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00904B, calcu00789A, calcu00293A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00904B(seed) - calcu00789A(seed) + calcu00293A(seed));
</script>

<template>
  <div class="blk">comp00404: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(345 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(165 50% 50%);
  display: inline-block;
}
</style>
