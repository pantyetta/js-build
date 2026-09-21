<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01546A, calcu00124B, calcu00029B, calcu00302B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01546A(seed) - calcu00124B(seed) + calcu00029B(seed) - calcu00302B(seed));
</script>

<template>
  <div class="blk">comp00555: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(120 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(300 50% 50%);
  display: inline-block;
}
</style>
