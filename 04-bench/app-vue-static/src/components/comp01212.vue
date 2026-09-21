<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01092B, calcu00767A, calcu00646A, calcu01592B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01092B(seed) - calcu00767A(seed) + calcu00646A(seed) - calcu01592B(seed));
</script>

<template>
  <div class="blk">comp01212: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
