<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01373A, calcu00377A, calcu01046A, calcu00568B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01373A(seed) - calcu00377A(seed) + calcu01046A(seed) - calcu00568B(seed));
</script>

<template>
  <div class="blk">comp01820: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(288 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(108 50% 50%);
  display: inline-block;
}
</style>
