<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00706B, calcu01083B, calcu01119B, calcu01342B, calcu00618B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00706B(seed) - calcu01083B(seed) + calcu01119B(seed) - calcu01342B(seed) + calcu00618B(seed));
</script>

<template>
  <div class="blk">comp00751: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(188 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(8 50% 50%);
  display: inline-block;
}
</style>
