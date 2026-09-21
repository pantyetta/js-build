<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00659B, calcu00482A, calcu00436A, calcu00557B, calcu01329B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00659B(seed) - calcu00482A(seed) + calcu00436A(seed) - calcu00557B(seed) + calcu01329B(seed));
</script>

<template>
  <div class="blk">comp01454: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
