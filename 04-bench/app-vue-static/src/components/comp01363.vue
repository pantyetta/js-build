<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00328A, calcu01122A, calcu00058B, calcu01306A, calcu00922A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00328A(seed) - calcu01122A(seed) + calcu00058B(seed) - calcu01306A(seed) + calcu00922A(seed));
</script>

<template>
  <div class="blk">comp01363: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
