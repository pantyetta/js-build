<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00267A, calcu00099A, calcu00481A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00267A(seed) - calcu00099A(seed) + calcu00481A(seed));
</script>

<template>
  <div class="blk">comp01046: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(79 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(259 50% 50%);
  display: inline-block;
}
</style>
