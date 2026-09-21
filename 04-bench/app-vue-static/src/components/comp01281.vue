<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01508B, calcu01530A, calcu00512A, calcu01228B, calcu00635B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01508B(seed) - calcu01530A(seed) + calcu00512A(seed) - calcu01228B(seed) + calcu00635B(seed));
</script>

<template>
  <div class="blk">comp01281: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
