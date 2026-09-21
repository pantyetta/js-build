<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00714A, calcu00385A, calcu01238B, calcu00186A, calcu00752A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00714A(seed) - calcu00385A(seed) + calcu01238B(seed) - calcu00186A(seed) + calcu00752A(seed));
</script>

<template>
  <div class="blk">comp01379: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(114 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(294 50% 50%);
  display: inline-block;
}
</style>
