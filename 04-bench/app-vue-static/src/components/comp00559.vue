<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01253A, calcu00109A, calcu00969A, calcu00971B, calcu01199A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01253A(seed) - calcu00109A(seed) + calcu00969A(seed) - calcu00971B(seed) + calcu01199A(seed));
</script>

<template>
  <div class="blk">comp00559: {{ total }}</div>
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
