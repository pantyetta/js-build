<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00227B, calcu00788B, calcu00080B, calcu00452A, calcu01200A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00227B(seed) - calcu00788B(seed) + calcu00080B(seed) - calcu00452A(seed) + calcu01200A(seed));
</script>

<template>
  <div class="blk">comp01303: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(184 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(4 50% 50%);
  display: inline-block;
}
</style>
