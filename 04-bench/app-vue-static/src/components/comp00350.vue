<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00307A, calcu01592B, calcu00662B, calcu00578B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00307A(seed) - calcu01592B(seed) + calcu00662B(seed) - calcu00578B(seed));
</script>

<template>
  <div class="blk">comp00350: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(320 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(140 50% 50%);
  display: inline-block;
}
</style>
