<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00596A, calcu00945B, calcu01439B, calcu00197B, calcu00451A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00596A(seed) - calcu00945B(seed) + calcu01439B(seed) - calcu00197B(seed) + calcu00451A(seed));
</script>

<template>
  <div class="blk">comp01783: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
