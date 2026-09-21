<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00533B, calcu00458A, calcu00436A, calcu00944B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00533B(seed) - calcu00458A(seed) + calcu00436A(seed) - calcu00944B(seed));
</script>

<template>
  <div class="blk">comp01824: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(29 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(209 50% 50%);
  display: inline-block;
}
</style>
