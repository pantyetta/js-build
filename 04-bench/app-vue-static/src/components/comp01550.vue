<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00023A, calcu00166A, calcu00819A, calcu00423B, calcu00899A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00023A(seed) - calcu00166A(seed) + calcu00819A(seed) - calcu00423B(seed) + calcu00899A(seed));
</script>

<template>
  <div class="blk">comp01550: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(331 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(151 50% 50%);
  display: inline-block;
}
</style>
