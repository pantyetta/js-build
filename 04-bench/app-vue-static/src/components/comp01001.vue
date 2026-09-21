<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00949B, calcu01428B, calcu00795A, calcu00696B, calcu01176A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00949B(seed) - calcu01428B(seed) + calcu00795A(seed) - calcu00696B(seed) + calcu01176A(seed));
</script>

<template>
  <div class="blk">comp01001: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(133 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(313 50% 50%);
  display: inline-block;
}
</style>
