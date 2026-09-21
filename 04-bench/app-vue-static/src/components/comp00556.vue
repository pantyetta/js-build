<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu00937A, calcu00386A, calcu01470B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01342B(seed) - calcu00937A(seed) + calcu00386A(seed) - calcu01470B(seed));
</script>

<template>
  <div class="blk">comp00556: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
