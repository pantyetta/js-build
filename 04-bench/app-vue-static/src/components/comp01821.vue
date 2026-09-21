<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00341A, calcu01392A, calcu00197B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00341A(seed) - calcu01392A(seed) + calcu00197B(seed));
</script>

<template>
  <div class="blk">comp01821: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(311 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(131 50% 50%);
  display: inline-block;
}
</style>
