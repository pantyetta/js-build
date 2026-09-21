<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00800A, calcu00832B, calcu00530B, calcu01163A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00800A(seed) - calcu00832B(seed) + calcu00530B(seed) - calcu01163A(seed));
</script>

<template>
  <div class="blk">comp00306: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(161 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(341 50% 50%);
  display: inline-block;
}
</style>
