<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00659A, calcu00795B, calcu01393A, calcu00019B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00659A(seed) - calcu00795B(seed) + calcu01393A(seed) - calcu00019B(seed));
</script>

<template>
  <div class="blk">comp01277: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
