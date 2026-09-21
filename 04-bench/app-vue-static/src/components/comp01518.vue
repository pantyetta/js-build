<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01375B, calcu00239A, calcu00270A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01375B(seed) - calcu00239A(seed) + calcu00270A(seed));
</script>

<template>
  <div class="blk">comp01518: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(355 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(175 50% 50%);
  display: inline-block;
}
</style>
