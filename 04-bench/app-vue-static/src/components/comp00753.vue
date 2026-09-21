<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01161A, calcu00231B, calcu00039A, calcu01377B, calcu00277B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu01161A(seed) - calcu00231B(seed) + calcu00039A(seed) - calcu01377B(seed) + calcu00277B(seed));
</script>

<template>
  <div class="blk">comp00753: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>
