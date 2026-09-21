<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00388B, calcu00491A, calcu01526B, calcu00220B, calcu00034B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00388B(seed) - calcu00491A(seed) + calcu01526B(seed) - calcu00220B(seed) + calcu00034B(seed));
</script>

<template>
  <div class="blk">comp01517: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
