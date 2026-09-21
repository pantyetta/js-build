<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00267B, calcu00637B, calcu00922A, calcu00336A, calcu01563A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00267B(seed) - calcu00637B(seed) + calcu00922A(seed) - calcu00336A(seed) + calcu01563A(seed));
</script>

<template>
  <div class="blk">comp01018: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(245 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(65 50% 50%);
  display: inline-block;
}
</style>
