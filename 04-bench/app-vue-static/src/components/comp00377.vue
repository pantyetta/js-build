<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00638A, calcu00415A, calcu01504B, calcu00660A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00638A(seed) - calcu00415A(seed) + calcu01504B(seed) - calcu00660A(seed));
</script>

<template>
  <div class="blk">comp00377: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(48 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(228 50% 50%);
  display: inline-block;
}
</style>
