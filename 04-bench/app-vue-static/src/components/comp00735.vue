<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00167B, calcu00500A, calcu00762B, calcu00934B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00167B(seed) - calcu00500A(seed) + calcu00762B(seed) - calcu00934B(seed));
</script>

<template>
  <div class="blk">comp00735: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(211 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(31 50% 50%);
  display: inline-block;
}
</style>
