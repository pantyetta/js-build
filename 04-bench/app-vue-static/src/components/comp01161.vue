<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00471B, calcu01439A, calcu00759B, calcu00171B, calcu00436B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00471B(seed) - calcu01439A(seed) + calcu00759B(seed) - calcu00171B(seed) + calcu00436B(seed));
</script>

<template>
  <div class="blk">comp01161: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(138 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(318 50% 50%);
  display: inline-block;
}
</style>
