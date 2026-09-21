<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01498A, calcu01327B, calcu00761B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu01498A(seed) - calcu01327B(seed) + calcu00761B(seed));
</script>

<template>
  <div class="blk">comp01729: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(94 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(274 50% 50%);
  display: inline-block;
}
</style>
