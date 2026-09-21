<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01014A, calcu00713A, calcu00806A, calcu00685A, calcu00819A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu01014A(seed) - calcu00713A(seed) + calcu00806A(seed) - calcu00685A(seed) + calcu00819A(seed));
</script>

<template>
  <div class="blk">comp01535: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(338 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(158 50% 50%);
  display: inline-block;
}
</style>
