<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01475A, calcu00167B, calcu01467B, calcu00696A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01475A(seed) - calcu00167B(seed) + calcu01467B(seed) - calcu00696A(seed));
</script>

<template>
  <div class="blk">comp00379: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
