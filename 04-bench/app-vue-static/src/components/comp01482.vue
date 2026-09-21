<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00430A, calcu01253A, calcu01573B, calcu01505B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00430A(seed) - calcu01253A(seed) + calcu01573B(seed) - calcu01505B(seed));
</script>

<template>
  <div class="blk">comp01482: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>
