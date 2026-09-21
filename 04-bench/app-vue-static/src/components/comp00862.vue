<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01468A, calcu01301B, calcu01198A, calcu00671A, calcu01352B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01468A(seed) - calcu01301B(seed) + calcu01198A(seed) - calcu00671A(seed) + calcu01352B(seed));
</script>

<template>
  <div class="blk">comp00862: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
