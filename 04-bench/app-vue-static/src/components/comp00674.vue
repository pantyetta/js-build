<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01068A, calcu00725B, calcu00388A, calcu00276B, calcu00908A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01068A(seed) - calcu00725B(seed) + calcu00388A(seed) - calcu00276B(seed) + calcu00908A(seed));
</script>

<template>
  <div class="blk">comp00674: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(72 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(252 50% 50%);
  display: inline-block;
}
</style>
