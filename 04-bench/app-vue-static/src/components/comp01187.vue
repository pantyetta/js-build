<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00256A, calcu01426B, calcu01015B, calcu00442B, calcu00113A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00256A(seed) - calcu01426B(seed) + calcu01015B(seed) - calcu00442B(seed) + calcu00113A(seed));
</script>

<template>
  <div class="blk">comp01187: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(58 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(238 50% 50%);
  display: inline-block;
}
</style>
