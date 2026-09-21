<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01072A, calcu00035B, calcu01077A, calcu01307A, calcu00554B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01072A(seed) - calcu00035B(seed) + calcu01077A(seed) - calcu01307A(seed) + calcu00554B(seed));
</script>

<template>
  <div class="blk">comp00209: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(155 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(335 50% 50%);
  display: inline-block;
}
</style>
