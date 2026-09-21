<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00506A, calcu00353B, calcu00913A, calcu01060A, calcu00910B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00506A(seed) - calcu00353B(seed) + calcu00913A(seed) - calcu01060A(seed) + calcu00910B(seed));
</script>

<template>
  <div class="blk">comp01276: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(281 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(101 50% 50%);
  display: inline-block;
}
</style>
