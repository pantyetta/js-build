<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00724A, calcu01185A, calcu00720B, calcu01172A, calcu01396B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00724A(seed) - calcu01185A(seed) + calcu00720B(seed) - calcu01172A(seed) + calcu01396B(seed));
</script>

<template>
  <div class="blk">comp01010: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(13 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(193 50% 50%);
  display: inline-block;
}
</style>
