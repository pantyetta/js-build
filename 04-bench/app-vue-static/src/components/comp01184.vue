<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00390B, calcu00698A, calcu01562A, calcu00342A, calcu01055B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00390B(seed) - calcu00698A(seed) + calcu01562A(seed) - calcu00342A(seed) + calcu01055B(seed));
</script>

<template>
  <div class="blk">comp01184: {{ total }}</div>
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
