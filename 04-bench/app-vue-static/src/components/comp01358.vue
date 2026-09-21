<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00497A, calcu00967A, calcu00581B, calcu01326B, calcu00695A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00497A(seed) - calcu00967A(seed) + calcu00581B(seed) - calcu01326B(seed) + calcu00695A(seed));
</script>

<template>
  <div class="blk">comp01358: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
