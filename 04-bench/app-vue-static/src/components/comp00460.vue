<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01301B, calcu00436B, calcu00912A, calcu01200A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01301B(seed) - calcu00436B(seed) + calcu00912A(seed) - calcu01200A(seed));
</script>

<template>
  <div class="blk">comp00460: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(30 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(210 50% 50%);
  display: inline-block;
}
</style>
