<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00288B, calcu00436A, calcu00578B, calcu00037B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00288B(seed) - calcu00436A(seed) + calcu00578B(seed) - calcu00037B(seed));
</script>

<template>
  <div class="blk">comp00992: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
