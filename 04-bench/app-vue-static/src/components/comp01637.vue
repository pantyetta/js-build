<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00921B, calcu00754B, calcu01541A, calcu00388B, calcu01378A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00921B(seed) - calcu00754B(seed) + calcu01541A(seed) - calcu00388B(seed) + calcu01378A(seed));
</script>

<template>
  <div class="blk">comp01637: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
