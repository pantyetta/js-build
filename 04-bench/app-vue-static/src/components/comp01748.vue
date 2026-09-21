<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00362A, calcu00198A, calcu00410A, calcu00374B, calcu00195A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00362A(seed) - calcu00198A(seed) + calcu00410A(seed) - calcu00374B(seed) + calcu00195A(seed));
</script>

<template>
  <div class="blk">comp01748: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
