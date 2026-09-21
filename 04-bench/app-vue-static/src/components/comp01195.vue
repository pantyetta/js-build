<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00419B, calcu01395A, calcu00452A, calcu00580B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00419B(seed) - calcu01395A(seed) + calcu00452A(seed) - calcu00580B(seed));
</script>

<template>
  <div class="blk">comp01195: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
