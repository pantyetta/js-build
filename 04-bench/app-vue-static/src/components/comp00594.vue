<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01062A, calcu01473A, calcu01085B, calcu00994B, calcu01228A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01062A(seed) - calcu01473A(seed) + calcu01085B(seed) - calcu00994B(seed) + calcu01228A(seed));
</script>

<template>
  <div class="blk">comp00594: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(124 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(304 50% 50%);
  display: inline-block;
}
</style>
