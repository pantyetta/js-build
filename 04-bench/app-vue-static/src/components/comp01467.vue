<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00648A, calcu01314B, calcu01405B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00648A(seed) - calcu01314B(seed) + calcu01405B(seed));
</script>

<template>
  <div class="blk">comp01467: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
