<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00282A, calcu00506A, calcu01177A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00282A(seed) - calcu00506A(seed) + calcu01177A(seed));
</script>

<template>
  <div class="blk">comp00099: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
