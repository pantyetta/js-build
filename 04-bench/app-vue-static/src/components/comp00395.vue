<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00007A, calcu01260B, calcu00888B, calcu00118A, calcu00308B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00007A(seed) - calcu01260B(seed) + calcu00888B(seed) - calcu00118A(seed) + calcu00308B(seed));
</script>

<template>
  <div class="blk">comp00395: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(219 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(39 50% 50%);
  display: inline-block;
}
</style>
