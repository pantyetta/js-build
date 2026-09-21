<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00048A, calcu01460B, calcu01101A, calcu00515B, calcu01215B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00048A(seed) - calcu01460B(seed) + calcu01101A(seed) - calcu00515B(seed) + calcu01215B(seed));
</script>

<template>
  <div class="blk">comp01300: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(359 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(179 50% 50%);
  display: inline-block;
}
</style>
