<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00965B, calcu00177B, calcu01361A, calcu00480B, calcu00662B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00965B(seed) - calcu00177B(seed) + calcu01361A(seed) - calcu00480B(seed) + calcu00662B(seed));
</script>

<template>
  <div class="blk">comp01778: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(202 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(22 50% 50%);
  display: inline-block;
}
</style>
