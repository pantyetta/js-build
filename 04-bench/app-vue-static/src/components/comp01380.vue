<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00066B, calcu00764A, calcu00481A, calcu00565A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00066B(seed) - calcu00764A(seed) + calcu00481A(seed) - calcu00565A(seed));
</script>

<template>
  <div class="blk">comp01380: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(68 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(248 50% 50%);
  display: inline-block;
}
</style>
