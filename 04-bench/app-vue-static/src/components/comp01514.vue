<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00561A, calcu00843B, calcu01460B, calcu00938A, calcu00335B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00561A(seed) - calcu00843B(seed) + calcu01460B(seed) - calcu00938A(seed) + calcu00335B(seed));
</script>

<template>
  <div class="blk">comp01514: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(244 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(64 50% 50%);
  display: inline-block;
}
</style>
