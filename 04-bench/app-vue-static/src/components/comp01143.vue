<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01518B, calcu00055B, calcu00478B, calcu01406A, calcu01355A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01518B(seed) - calcu00055B(seed) + calcu00478B(seed) - calcu01406A(seed) + calcu01355A(seed));
</script>

<template>
  <div class="blk">comp01143: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
