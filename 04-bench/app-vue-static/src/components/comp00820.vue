<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01382A, calcu00371B, calcu00170A, calcu00792B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01382A(seed) - calcu00371B(seed) + calcu00170A(seed) - calcu00792B(seed));
</script>

<template>
  <div class="blk">comp00820: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(249 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(69 50% 50%);
  display: inline-block;
}
</style>
