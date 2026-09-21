<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00268A, calcu00761A, calcu01143A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00268A(seed) - calcu00761A(seed) + calcu01143A(seed));
</script>

<template>
  <div class="blk">comp01422: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(92 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(272 50% 50%);
  display: inline-block;
}
</style>
