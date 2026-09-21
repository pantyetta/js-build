<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00990B, calcu00437B, calcu00179B, calcu00850B, calcu01192A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00990B(seed) - calcu00437B(seed) + calcu00179B(seed) - calcu00850B(seed) + calcu01192A(seed));
</script>

<template>
  <div class="blk">comp01766: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(321 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(141 50% 50%);
  display: inline-block;
}
</style>
