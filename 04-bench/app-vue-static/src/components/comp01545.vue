<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00712A, calcu00638B, calcu00800B, calcu01207A, calcu00270A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00712A(seed) - calcu00638B(seed) + calcu00800B(seed) - calcu01207A(seed) + calcu00270A(seed));
</script>

<template>
  <div class="blk">comp01545: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(207 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(27 50% 50%);
  display: inline-block;
}
</style>
