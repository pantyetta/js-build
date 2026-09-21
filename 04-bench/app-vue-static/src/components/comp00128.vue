<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00874A, calcu01036A, calcu00449B, calcu01400B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00874A(seed) - calcu01036A(seed) + calcu00449B(seed) - calcu01400B(seed));
</script>

<template>
  <div class="blk">comp00128: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(279 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(99 50% 50%);
  display: inline-block;
}
</style>
