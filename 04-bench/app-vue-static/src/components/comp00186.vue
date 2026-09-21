<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01386A, calcu01376B, calcu00947B, calcu00878A, calcu00942B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01386A(seed) - calcu01376B(seed) + calcu00947B(seed) - calcu00878A(seed) + calcu00942B(seed));
</script>

<template>
  <div class="blk">comp00186: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(14 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(194 50% 50%);
  display: inline-block;
}
</style>
