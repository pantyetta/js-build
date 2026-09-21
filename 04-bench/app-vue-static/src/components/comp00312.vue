<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00920A, calcu01168A, calcu00215A, calcu01476A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00920A(seed) - calcu01168A(seed) + calcu00215A(seed) - calcu01476A(seed));
</script>

<template>
  <div class="blk">comp00312: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(153 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(333 50% 50%);
  display: inline-block;
}
</style>
