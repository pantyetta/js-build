<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00511B, calcu00787B, calcu00190B, calcu01021A, calcu00462A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00511B(seed) - calcu00787B(seed) + calcu00190B(seed) - calcu01021A(seed) + calcu00462A(seed));
</script>

<template>
  <div class="blk">comp01814: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>
