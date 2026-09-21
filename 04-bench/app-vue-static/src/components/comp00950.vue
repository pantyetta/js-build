<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01579B, calcu00285B, calcu00111B, calcu00922B, calcu00959B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu01579B(seed) - calcu00285B(seed) + calcu00111B(seed) - calcu00922B(seed) + calcu00959B(seed));
</script>

<template>
  <div class="blk">comp00950: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
