<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00123A, calcu00570A, calcu00008A, calcu01156A, calcu00992A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00123A(seed) - calcu00570A(seed) + calcu00008A(seed) - calcu01156A(seed) + calcu00992A(seed));
</script>

<template>
  <div class="blk">comp00111: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(194 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(14 50% 50%);
  display: inline-block;
}
</style>
