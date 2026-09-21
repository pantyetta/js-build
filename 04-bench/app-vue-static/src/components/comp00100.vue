<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01321B, calcu01388B, calcu00789A, calcu01235A, calcu00865B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01321B(seed) - calcu01388B(seed) + calcu00789A(seed) - calcu01235A(seed) + calcu00865B(seed));
</script>

<template>
  <div class="blk">comp00100: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(304 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(124 50% 50%);
  display: inline-block;
}
</style>
