<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01039A, calcu00754A, calcu00825B, calcu01030B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01039A(seed) - calcu00754A(seed) + calcu00825B(seed) - calcu01030B(seed));
</script>

<template>
  <div class="blk">comp01200: {{ total }}</div>
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
