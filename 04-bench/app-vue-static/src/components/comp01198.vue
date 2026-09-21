<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00066B, calcu00908B, calcu00130A, calcu00253B, calcu00577A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00066B(seed) - calcu00908B(seed) + calcu00130A(seed) - calcu00253B(seed) + calcu00577A(seed));
</script>

<template>
  <div class="blk">comp01198: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(114 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(294 50% 50%);
  display: inline-block;
}
</style>
