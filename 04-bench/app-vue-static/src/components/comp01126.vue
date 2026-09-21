<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00404A, calcu00636B, calcu01080B, calcu00132B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00404A(seed) - calcu00636B(seed) + calcu01080B(seed) - calcu00132B(seed));
</script>

<template>
  <div class="blk">comp01126: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
