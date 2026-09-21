<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00410A, calcu00713B, calcu00850A, calcu00473A, calcu01023B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu00410A(seed) - calcu00713B(seed) + calcu00850A(seed) - calcu00473A(seed) + calcu01023B(seed));
</script>

<template>
  <div class="blk">comp00369: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
