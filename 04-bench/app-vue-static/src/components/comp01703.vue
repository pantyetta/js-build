<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00056A, calcu00100A, calcu00870A, calcu00172A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00056A(seed) - calcu00100A(seed) + calcu00870A(seed) - calcu00172A(seed));
</script>

<template>
  <div class="blk">comp01703: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(196 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(16 50% 50%);
  display: inline-block;
}
</style>
