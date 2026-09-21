<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01238B, calcu00729B, calcu00156B, calcu00802A, calcu01349A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01238B(seed) - calcu00729B(seed) + calcu00156B(seed) - calcu00802A(seed) + calcu01349A(seed));
</script>

<template>
  <div class="blk">comp00868: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>
