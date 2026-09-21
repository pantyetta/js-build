<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00047B, calcu00750B, calcu01119B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00047B(seed) - calcu00750B(seed) + calcu01119B(seed));
</script>

<template>
  <div class="blk">comp00553: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(86 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(266 50% 50%);
  display: inline-block;
}
</style>
