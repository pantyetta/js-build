<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00977A, calcu00379A, calcu00554B, calcu01434B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00977A(seed) - calcu00379A(seed) + calcu00554B(seed) - calcu01434B(seed));
</script>

<template>
  <div class="blk">comp00021: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(96 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(276 50% 50%);
  display: inline-block;
}
</style>
