<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00143B, calcu01584B, calcu00486B, calcu00448A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00143B(seed) - calcu01584B(seed) + calcu00486B(seed) - calcu00448A(seed));
</script>

<template>
  <div class="blk">comp01439: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(341 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(161 50% 50%);
  display: inline-block;
}
</style>
