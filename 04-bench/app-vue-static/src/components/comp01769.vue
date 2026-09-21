<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu01425B, calcu00562B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu01342B(seed) - calcu01425B(seed) + calcu00562B(seed));
</script>

<template>
  <div class="blk">comp01769: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>
