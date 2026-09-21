<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00030B, calcu01214B, calcu01383B, calcu00196A, calcu00166A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00030B(seed) - calcu01214B(seed) + calcu01383B(seed) - calcu00196A(seed) + calcu00166A(seed));
</script>

<template>
  <div class="blk">comp01415: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(160 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(340 50% 50%);
  display: inline-block;
}
</style>
