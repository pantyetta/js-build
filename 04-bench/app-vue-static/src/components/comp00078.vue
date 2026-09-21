<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00500B, calcu00420A, calcu00845B, calcu01128A, calcu01000A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00500B(seed) - calcu00420A(seed) + calcu00845B(seed) - calcu01128A(seed) + calcu01000A(seed));
</script>

<template>
  <div class="blk">comp00078: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
