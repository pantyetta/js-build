<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01192B, calcu00815A, calcu00711B, calcu00848B, calcu00458A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu01192B(seed) - calcu00815A(seed) + calcu00711B(seed) - calcu00848B(seed) + calcu00458A(seed));
</script>

<template>
  <div class="blk">comp00676: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>
