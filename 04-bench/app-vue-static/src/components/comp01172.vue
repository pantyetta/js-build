<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00249B, calcu00306A, calcu00325B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00249B(seed) - calcu00306A(seed) + calcu00325B(seed));
</script>

<template>
  <div class="blk">comp01172: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(156 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(336 50% 50%);
  display: inline-block;
}
</style>
