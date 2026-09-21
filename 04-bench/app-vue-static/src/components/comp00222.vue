<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01057A, calcu00954A, calcu00410A, calcu00425B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01057A(seed) - calcu00954A(seed) + calcu00410A(seed) - calcu00425B(seed));
</script>

<template>
  <div class="blk">comp00222: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>
