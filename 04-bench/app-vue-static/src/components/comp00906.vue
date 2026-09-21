<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00714B, calcu00228B, calcu00760B, calcu00153B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00714B(seed) - calcu00228B(seed) + calcu00760B(seed) - calcu00153B(seed));
</script>

<template>
  <div class="blk">comp00906: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(14 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(194 50% 50%);
  display: inline-block;
}
</style>
