<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580B, calcu01029A, calcu01032B, calcu00529B, calcu00117A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00580B(seed) - calcu01029A(seed) + calcu01032B(seed) - calcu00529B(seed) + calcu00117A(seed));
</script>

<template>
  <div class="blk">comp01576: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(327 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(147 50% 50%);
  display: inline-block;
}
</style>
