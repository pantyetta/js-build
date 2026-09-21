<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01325B, calcu01343A, calcu01383B, calcu01444A, calcu00758A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01325B(seed) - calcu01343A(seed) + calcu01383B(seed) - calcu01444A(seed) + calcu00758A(seed));
</script>

<template>
  <div class="blk">comp01501: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
