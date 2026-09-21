<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00087B, calcu00520A, calcu00014B, calcu00315B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00087B(seed) - calcu00520A(seed) + calcu00014B(seed) - calcu00315B(seed));
</script>

<template>
  <div class="blk">comp01372: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(92 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(272 50% 50%);
  display: inline-block;
}
</style>
