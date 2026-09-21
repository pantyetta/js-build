<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00961B, calcu01366A, calcu01579B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00961B(seed) - calcu01366A(seed) + calcu01579B(seed));
</script>

<template>
  <div class="blk">comp01024: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(222 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(42 50% 50%);
  display: inline-block;
}
</style>
