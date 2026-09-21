<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01383A, calcu00853B, calcu00638A, calcu00556B, calcu01156B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01383A(seed) - calcu00853B(seed) + calcu00638A(seed) - calcu00556B(seed) + calcu01156B(seed));
</script>

<template>
  <div class="blk">comp01986: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(162 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(342 50% 50%);
  display: inline-block;
}
</style>
