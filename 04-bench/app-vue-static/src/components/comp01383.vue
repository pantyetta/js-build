<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01117A, calcu01533B, calcu00519A, calcu00458B, calcu01337B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01117A(seed) - calcu01533B(seed) + calcu00519A(seed) - calcu00458B(seed) + calcu01337B(seed));
</script>

<template>
  <div class="blk">comp01383: {{ total }}</div>
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
