<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00172A, calcu00407A, calcu00007B, calcu00296B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00172A(seed) - calcu00407A(seed) + calcu00007B(seed) - calcu00296B(seed));
</script>

<template>
  <div class="blk">comp01960: {{ total }}</div>
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
