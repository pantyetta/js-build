<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00360A, calcu01168B, calcu00444A, calcu00276B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00360A(seed) - calcu01168B(seed) + calcu00444A(seed) - calcu00276B(seed));
</script>

<template>
  <div class="blk">comp00965: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
