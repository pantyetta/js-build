<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00577A, calcu00734B, calcu00246B, calcu00716A, calcu01274A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00577A(seed) - calcu00734B(seed) + calcu00246B(seed) - calcu00716A(seed) + calcu01274A(seed));
</script>

<template>
  <div class="blk">comp00752: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(288 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(108 50% 50%);
  display: inline-block;
}
</style>
