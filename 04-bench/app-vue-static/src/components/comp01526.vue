<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00634A, calcu01245A, calcu01467B, calcu01458B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00634A(seed) - calcu01245A(seed) + calcu01467B(seed) - calcu01458B(seed));
</script>

<template>
  <div class="blk">comp01526: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>
