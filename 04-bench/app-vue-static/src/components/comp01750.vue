<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01104B, calcu01461A, calcu00332B, calcu01030B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01104B(seed) - calcu01461A(seed) + calcu00332B(seed) - calcu01030B(seed));
</script>

<template>
  <div class="blk">comp01750: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>
