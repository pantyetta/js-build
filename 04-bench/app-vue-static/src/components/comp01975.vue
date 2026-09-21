<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00385B, calcu00163B, calcu00516B, calcu00684B, calcu01071B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00385B(seed) - calcu00163B(seed) + calcu00516B(seed) - calcu00684B(seed) + calcu01071B(seed));
</script>

<template>
  <div class="blk">comp01975: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(322 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(142 50% 50%);
  display: inline-block;
}
</style>
