<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00475B, calcu00542A, calcu00780B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00475B(seed) - calcu00542A(seed) + calcu00780B(seed));
</script>

<template>
  <div class="blk">comp01314: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
