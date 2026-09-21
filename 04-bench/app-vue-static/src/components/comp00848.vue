<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01234B, calcu00111A, calcu00282A, calcu01463A, calcu00383A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01234B(seed) - calcu00111A(seed) + calcu00282A(seed) - calcu01463A(seed) + calcu00383A(seed));
</script>

<template>
  <div class="blk">comp00848: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(79 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(259 50% 50%);
  display: inline-block;
}
</style>
