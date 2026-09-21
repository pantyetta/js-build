<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00962B, calcu00862A, calcu00357B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00962B(seed) - calcu00862A(seed) + calcu00357B(seed));
</script>

<template>
  <div class="blk">comp01089: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
