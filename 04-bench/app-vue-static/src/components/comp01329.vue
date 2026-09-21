<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01593B, calcu00735A, calcu01302A, calcu01429B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01593B(seed) - calcu00735A(seed) + calcu01302A(seed) - calcu01429B(seed));
</script>

<template>
  <div class="blk">comp01329: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(352 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(172 50% 50%);
  display: inline-block;
}
</style>
