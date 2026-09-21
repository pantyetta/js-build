<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00962A, calcu01413A, calcu00578B, calcu01230B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00962A(seed) - calcu01413A(seed) + calcu00578B(seed) - calcu01230B(seed));
</script>

<template>
  <div class="blk">comp00475: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(40 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(220 50% 50%);
  display: inline-block;
}
</style>
