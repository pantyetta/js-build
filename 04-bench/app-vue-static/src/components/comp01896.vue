<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01593A, calcu00624A, calcu01097B, calcu00572B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01593A(seed) - calcu00624A(seed) + calcu01097B(seed) - calcu00572B(seed));
</script>

<template>
  <div class="blk">comp01896: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(293 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(113 50% 50%);
  display: inline-block;
}
</style>
