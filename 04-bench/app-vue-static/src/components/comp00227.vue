<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00188B, calcu00190A, calcu01158A, calcu01370A, calcu00817A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00188B(seed) - calcu00190A(seed) + calcu01158A(seed) - calcu01370A(seed) + calcu00817A(seed));
</script>

<template>
  <div class="blk">comp00227: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
