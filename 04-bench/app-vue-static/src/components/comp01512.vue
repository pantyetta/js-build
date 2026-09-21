<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01119B, calcu00420A, calcu01194B, calcu00032B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01119B(seed) - calcu00420A(seed) + calcu01194B(seed) - calcu00032B(seed));
</script>

<template>
  <div class="blk">comp01512: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
