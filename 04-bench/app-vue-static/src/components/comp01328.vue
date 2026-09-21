<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00539B, calcu01189A, calcu00722B, calcu00660A, calcu00793A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00539B(seed) - calcu01189A(seed) + calcu00722B(seed) - calcu00660A(seed) + calcu00793A(seed));
</script>

<template>
  <div class="blk">comp01328: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(233 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(53 50% 50%);
  display: inline-block;
}
</style>
