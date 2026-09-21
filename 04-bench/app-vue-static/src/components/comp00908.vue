<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00146A, calcu01259A, calcu01297B, calcu00937B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00146A(seed) - calcu01259A(seed) + calcu01297B(seed) - calcu00937B(seed));
</script>

<template>
  <div class="blk">comp00908: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
