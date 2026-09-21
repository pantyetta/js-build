<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00398B, calcu00998B, calcu00719B, calcu00029B, calcu01277B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00398B(seed) - calcu00998B(seed) + calcu00719B(seed) - calcu00029B(seed) + calcu01277B(seed));
</script>

<template>
  <div class="blk">comp00967: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(201 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(21 50% 50%);
  display: inline-block;
}
</style>
