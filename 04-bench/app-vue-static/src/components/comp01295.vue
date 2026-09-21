<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00372B, calcu00266B, calcu01460A, calcu01098A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00372B(seed) - calcu00266B(seed) + calcu01460A(seed) - calcu01098A(seed));
</script>

<template>
  <div class="blk">comp01295: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
