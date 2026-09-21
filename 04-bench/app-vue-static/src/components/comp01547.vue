<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01370A, calcu00896B, calcu00825A, calcu00675A, calcu01143A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01370A(seed) - calcu00896B(seed) + calcu00825A(seed) - calcu00675A(seed) + calcu01143A(seed));
</script>

<template>
  <div class="blk">comp01547: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(122 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(302 50% 50%);
  display: inline-block;
}
</style>
