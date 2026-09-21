<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01390B, calcu00590B, calcu00328B, calcu00908A, calcu01244B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01390B(seed) - calcu00590B(seed) + calcu00328B(seed) - calcu00908A(seed) + calcu01244B(seed));
</script>

<template>
  <div class="blk">comp01892: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
