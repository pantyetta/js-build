<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01356B, calcu00262A, calcu00793A, calcu00335A, calcu01338A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01356B(seed) - calcu00262A(seed) + calcu00793A(seed) - calcu00335A(seed) + calcu01338A(seed));
</script>

<template>
  <div class="blk">comp00836: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
