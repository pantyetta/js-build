<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00469B, calcu00150B, calcu01383A, calcu00105A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00469B(seed) - calcu00150B(seed) + calcu01383A(seed) - calcu00105A(seed));
</script>

<template>
  <div class="blk">comp00978: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
