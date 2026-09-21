<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01557B, calcu00001A, calcu00662B, calcu01542B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01557B(seed) - calcu00001A(seed) + calcu00662B(seed) - calcu01542B(seed));
</script>

<template>
  <div class="blk">comp01840: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(90 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(270 50% 50%);
  display: inline-block;
}
</style>
