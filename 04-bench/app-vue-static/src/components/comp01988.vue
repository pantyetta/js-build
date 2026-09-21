<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00753B, calcu00493B, calcu00909A, calcu00486B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00753B(seed) - calcu00493B(seed) + calcu00909A(seed) - calcu00486B(seed));
</script>

<template>
  <div class="blk">comp01988: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
