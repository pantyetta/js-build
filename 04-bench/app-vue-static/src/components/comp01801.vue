<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00476B, calcu00740B, calcu00639A, calcu01447A, calcu00136A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00476B(seed) - calcu00740B(seed) + calcu00639A(seed) - calcu01447A(seed) + calcu00136A(seed));
</script>

<template>
  <div class="blk">comp01801: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>
