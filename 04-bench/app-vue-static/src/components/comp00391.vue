<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01504A, calcu00928A, calcu00056B, calcu00330A, calcu00584A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01504A(seed) - calcu00928A(seed) + calcu00056B(seed) - calcu00330A(seed) + calcu00584A(seed));
</script>

<template>
  <div class="blk">comp00391: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
