<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00464B, calcu01273A, calcu00095B, calcu00543B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00464B(seed) - calcu01273A(seed) + calcu00095B(seed) - calcu00543B(seed));
</script>

<template>
  <div class="blk">comp01397: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(126 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(306 50% 50%);
  display: inline-block;
}
</style>
