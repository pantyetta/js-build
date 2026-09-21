<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00884A, calcu01142B, calcu00203B, calcu01179A, calcu01186B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00884A(seed) - calcu01142B(seed) + calcu00203B(seed) - calcu01179A(seed) + calcu01186B(seed));
</script>

<template>
  <div class="blk">comp00504: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(6 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(186 50% 50%);
  display: inline-block;
}
</style>
