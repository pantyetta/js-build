<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00881B, calcu01485A, calcu00888B, calcu00599B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00881B(seed) - calcu01485A(seed) + calcu00888B(seed) - calcu00599B(seed));
</script>

<template>
  <div class="blk">comp00294: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(117 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(297 50% 50%);
  display: inline-block;
}
</style>
