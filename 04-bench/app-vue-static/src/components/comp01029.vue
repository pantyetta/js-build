<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00180A, calcu00949B, calcu00045B, calcu01427B, calcu01191A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00180A(seed) - calcu00949B(seed) + calcu00045B(seed) - calcu01427B(seed) + calcu01191A(seed));
</script>

<template>
  <div class="blk">comp01029: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(191 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(11 50% 50%);
  display: inline-block;
}
</style>
