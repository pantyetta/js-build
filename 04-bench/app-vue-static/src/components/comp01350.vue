<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00476A, calcu00674B, calcu01068B, calcu00528B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00476A(seed) - calcu00674B(seed) + calcu01068B(seed) - calcu00528B(seed));
</script>

<template>
  <div class="blk">comp01350: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>
