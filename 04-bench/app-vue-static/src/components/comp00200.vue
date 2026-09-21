<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00267A, calcu01459A, calcu01079B, calcu01017A, calcu01328B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00267A(seed) - calcu01459A(seed) + calcu01079B(seed) - calcu01017A(seed) + calcu01328B(seed));
</script>

<template>
  <div class="blk">comp00200: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(320 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(140 50% 50%);
  display: inline-block;
}
</style>
