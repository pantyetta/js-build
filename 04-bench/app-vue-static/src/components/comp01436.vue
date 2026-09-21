<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00194A, calcu00486A, calcu00977B, calcu00874A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00194A(seed) - calcu00486A(seed) + calcu00977B(seed) - calcu00874A(seed));
</script>

<template>
  <div class="blk">comp01436: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(202 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(22 50% 50%);
  display: inline-block;
}
</style>
