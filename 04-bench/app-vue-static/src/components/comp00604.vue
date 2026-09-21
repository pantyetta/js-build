<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01313A, calcu01565B, calcu00312A, calcu00749A, calcu00303B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01313A(seed) - calcu01565B(seed) + calcu00312A(seed) - calcu00749A(seed) + calcu00303B(seed));
</script>

<template>
  <div class="blk">comp00604: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(23 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(203 50% 50%);
  display: inline-block;
}
</style>
