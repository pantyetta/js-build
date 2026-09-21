<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00324B, calcu01085A, calcu00594A, calcu01146A, calcu00980B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00324B(seed) - calcu01085A(seed) + calcu00594A(seed) - calcu01146A(seed) + calcu00980B(seed));
</script>

<template>
  <div class="blk">comp01473: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
