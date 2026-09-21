<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01373A, calcu00067A, calcu00065A, calcu01106B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01373A(seed) - calcu00067A(seed) + calcu00065A(seed) - calcu01106B(seed));
</script>

<template>
  <div class="blk">comp01504: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(15 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(195 50% 50%);
  display: inline-block;
}
</style>
