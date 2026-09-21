<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00729A, calcu00906B, calcu01122A, calcu00552B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00729A(seed) - calcu00906B(seed) + calcu01122A(seed) - calcu00552B(seed));
</script>

<template>
  <div class="blk">comp00795: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
