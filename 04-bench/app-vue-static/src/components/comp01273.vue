<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00068B, calcu00330A, calcu00714B, calcu00795A, calcu00241A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00068B(seed) - calcu00330A(seed) + calcu00714B(seed) - calcu00795A(seed) + calcu00241A(seed));
</script>

<template>
  <div class="blk">comp01273: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(107 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(287 50% 50%);
  display: inline-block;
}
</style>
