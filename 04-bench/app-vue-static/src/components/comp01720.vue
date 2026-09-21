<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00198B, calcu00207B, calcu01220B, calcu01241B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00198B(seed) - calcu00207B(seed) + calcu01220B(seed) - calcu01241B(seed));
</script>

<template>
  <div class="blk">comp01720: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(239 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(59 50% 50%);
  display: inline-block;
}
</style>
