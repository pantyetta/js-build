<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00845B, calcu00558B, calcu00174A, calcu00849B, calcu00349B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00845B(seed) - calcu00558B(seed) + calcu00174A(seed) - calcu00849B(seed) + calcu00349B(seed));
</script>

<template>
  <div class="blk">comp01998: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>
