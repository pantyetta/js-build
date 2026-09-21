<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00879B, calcu01036A, calcu00129B, calcu00734B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00879B(seed) - calcu01036A(seed) + calcu00129B(seed) - calcu00734B(seed));
</script>

<template>
  <div class="blk">comp01381: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(136 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(316 50% 50%);
  display: inline-block;
}
</style>
