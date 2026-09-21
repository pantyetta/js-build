<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00949A, calcu00383B, calcu01080B, calcu00451A, calcu00539B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00949A(seed) - calcu00383B(seed) + calcu01080B(seed) - calcu00451A(seed) + calcu00539B(seed));
</script>

<template>
  <div class="blk">comp01744: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(97 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(277 50% 50%);
  display: inline-block;
}
</style>
