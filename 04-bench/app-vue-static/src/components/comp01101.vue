<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00298A, calcu01395A, calcu01545A, calcu01311A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00298A(seed) - calcu01395A(seed) + calcu01545A(seed) - calcu01311A(seed));
</script>

<template>
  <div class="blk">comp01101: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(132 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(312 50% 50%);
  display: inline-block;
}
</style>
