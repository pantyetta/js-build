<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00393A, calcu00977B, calcu00103A, calcu01230A, calcu00369B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00393A(seed) - calcu00977B(seed) + calcu00103A(seed) - calcu01230A(seed) + calcu00369B(seed));
</script>

<template>
  <div class="blk">comp01343: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(354 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(174 50% 50%);
  display: inline-block;
}
</style>
