<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00418A, calcu00114B, calcu00836A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00418A(seed) - calcu00114B(seed) + calcu00836A(seed));
</script>

<template>
  <div class="blk">comp01808: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(137 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(317 50% 50%);
  display: inline-block;
}
</style>
