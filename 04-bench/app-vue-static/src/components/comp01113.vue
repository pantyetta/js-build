<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00493B, calcu00840A, calcu00533B, calcu00929A, calcu00748B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00493B(seed) - calcu00840A(seed) + calcu00533B(seed) - calcu00929A(seed) + calcu00748B(seed));
</script>

<template>
  <div class="blk">comp01113: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(204 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(24 50% 50%);
  display: inline-block;
}
</style>
