<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00340B, calcu01508A, calcu00168B, calcu01078B, calcu00098A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00340B(seed) - calcu01508A(seed) + calcu00168B(seed) - calcu01078B(seed) + calcu00098A(seed));
</script>

<template>
  <div class="blk">comp00040: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(273 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(93 50% 50%);
  display: inline-block;
}
</style>
