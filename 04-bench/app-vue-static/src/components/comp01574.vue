<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00955A, calcu01507B, calcu01513B, calcu00348A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00955A(seed) - calcu01507B(seed) + calcu01513B(seed) - calcu00348A(seed));
</script>

<template>
  <div class="blk">comp01574: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(243 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(63 50% 50%);
  display: inline-block;
}
</style>
