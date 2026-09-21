<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00374A, calcu00545B, calcu01578A, calcu00306A, calcu00532A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00374A(seed) - calcu00545B(seed) + calcu01578A(seed) - calcu00306A(seed) + calcu00532A(seed));
</script>

<template>
  <div class="blk">comp01168: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
