<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01023B, calcu00070A, calcu01480A, calcu00868B, calcu00095B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01023B(seed) - calcu00070A(seed) + calcu01480A(seed) - calcu00868B(seed) + calcu00095B(seed));
</script>

<template>
  <div class="blk">comp00968: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
