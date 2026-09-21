<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00645A, calcu00019A, calcu00518B, calcu00771B, calcu01563A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00645A(seed) - calcu00019A(seed) + calcu00518B(seed) - calcu00771B(seed) + calcu01563A(seed));
</script>

<template>
  <div class="blk">comp01041: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
