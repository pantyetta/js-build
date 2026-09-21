<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00787B, calcu01096A, calcu00263A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00787B(seed) - calcu01096A(seed) + calcu00263A(seed));
</script>

<template>
  <div class="blk">comp00163: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>
