<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00395B, calcu00737A, calcu00639A, calcu00482B, calcu00821A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00395B(seed) - calcu00737A(seed) + calcu00639A(seed) - calcu00482B(seed) + calcu00821A(seed));
</script>

<template>
  <div class="blk">comp00657: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(72 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(252 50% 50%);
  display: inline-block;
}
</style>
