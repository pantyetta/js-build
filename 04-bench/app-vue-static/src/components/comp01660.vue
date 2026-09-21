<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01598B, calcu00768A, calcu00628B, calcu01357B, calcu01523B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01598B(seed) - calcu00768A(seed) + calcu00628B(seed) - calcu01357B(seed) + calcu01523B(seed));
</script>

<template>
  <div class="blk">comp01660: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
