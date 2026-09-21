<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01266B, calcu00773A, calcu00140A, calcu01308A, calcu00565A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01266B(seed) - calcu00773A(seed) + calcu00140A(seed) - calcu01308A(seed) + calcu00565A(seed));
</script>

<template>
  <div class="blk">comp00138: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>
