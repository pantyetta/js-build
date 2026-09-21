<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu00706A, calcu00869A, calcu00722A, calcu01445A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01342B(seed) - calcu00706A(seed) + calcu00869A(seed) - calcu00722A(seed) + calcu01445A(seed));
</script>

<template>
  <div class="blk">comp00291: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(75 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(255 50% 50%);
  display: inline-block;
}
</style>
