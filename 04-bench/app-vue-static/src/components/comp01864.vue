<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00966A, calcu00445A, calcu00039A, calcu01543B, calcu00118A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00966A(seed) - calcu00445A(seed) + calcu00039A(seed) - calcu01543B(seed) + calcu00118A(seed));
</script>

<template>
  <div class="blk">comp01864: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(291 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(111 50% 50%);
  display: inline-block;
}
</style>
