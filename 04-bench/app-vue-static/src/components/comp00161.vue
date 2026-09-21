<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00743B, calcu01406A, calcu01276A, calcu01128A, calcu00067A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00743B(seed) - calcu01406A(seed) + calcu01276A(seed) - calcu01128A(seed) + calcu00067A(seed));
</script>

<template>
  <div class="blk">comp00161: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
