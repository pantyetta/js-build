<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01360A, calcu00676A, calcu00713A, calcu00944A } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01360A(seed) - calcu00676A(seed) + calcu00713A(seed) - calcu00944A(seed));
</script>

<template>
  <div class="blk">comp01081: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(130 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(310 50% 50%);
  display: inline-block;
}
</style>
