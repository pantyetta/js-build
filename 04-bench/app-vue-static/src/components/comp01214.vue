<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00732A, calcu00556B, calcu01285A, calcu00831B, calcu01266A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00732A(seed) - calcu00556B(seed) + calcu01285A(seed) - calcu00831B(seed) + calcu01266A(seed));
</script>

<template>
  <div class="blk">comp01214: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(149 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(329 50% 50%);
  display: inline-block;
}
</style>
