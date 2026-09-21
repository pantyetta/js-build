<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00680A, calcu00242B, calcu00520A, calcu01203B, calcu00330A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00680A(seed) - calcu00242B(seed) + calcu00520A(seed) - calcu01203B(seed) + calcu00330A(seed));
</script>

<template>
  <div class="blk">comp01373: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(171 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(351 50% 50%);
  display: inline-block;
}
</style>
