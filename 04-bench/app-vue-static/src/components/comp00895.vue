<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00382A, calcu00233B, calcu00784A, calcu00130A, calcu01055A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00382A(seed) - calcu00233B(seed) + calcu00784A(seed) - calcu00130A(seed) + calcu01055A(seed));
</script>

<template>
  <div class="blk">comp00895: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(14 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(194 50% 50%);
  display: inline-block;
}
</style>
