<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00387A, calcu00735A, calcu01396A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00387A(seed) - calcu00735A(seed) + calcu01396A(seed));
</script>

<template>
  <div class="blk">comp01942: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(286 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(106 50% 50%);
  display: inline-block;
}
</style>
