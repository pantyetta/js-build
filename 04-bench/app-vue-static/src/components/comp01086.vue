<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00762A, calcu00719A, calcu00055A, calcu00660B, calcu00533B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00762A(seed) - calcu00719A(seed) + calcu00055A(seed) - calcu00660B(seed) + calcu00533B(seed));
</script>

<template>
  <div class="blk">comp01086: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(53 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(233 50% 50%);
  display: inline-block;
}
</style>
