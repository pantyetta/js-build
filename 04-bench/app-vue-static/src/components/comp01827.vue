<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00829A, calcu01439A, calcu00684A, calcu01453A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00829A(seed) - calcu01439A(seed) + calcu00684A(seed) - calcu01453A(seed));
</script>

<template>
  <div class="blk">comp01827: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>
