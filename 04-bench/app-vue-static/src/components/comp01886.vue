<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00437B, calcu00903A, calcu01294B, calcu00239B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00437B(seed) - calcu00903A(seed) + calcu01294B(seed) - calcu00239B(seed));
</script>

<template>
  <div class="blk">comp01886: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
