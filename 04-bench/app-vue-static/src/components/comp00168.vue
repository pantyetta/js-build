<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00417A, calcu00927B, calcu00052B, calcu00262A, calcu00587A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00417A(seed) - calcu00927B(seed) + calcu00052B(seed) - calcu00262A(seed) + calcu00587A(seed));
</script>

<template>
  <div class="blk">comp00168: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(333 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(153 50% 50%);
  display: inline-block;
}
</style>
