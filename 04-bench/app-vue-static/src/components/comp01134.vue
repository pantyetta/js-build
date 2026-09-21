<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00070A, calcu01145A, calcu01006A, calcu00604B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00070A(seed) - calcu01145A(seed) + calcu01006A(seed) - calcu00604B(seed));
</script>

<template>
  <div class="blk">comp01134: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
