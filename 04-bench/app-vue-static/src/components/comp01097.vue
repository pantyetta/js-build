<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01287A, calcu00607A, calcu00761A, calcu01528B, calcu00734A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01287A(seed) - calcu00607A(seed) + calcu00761A(seed) - calcu01528B(seed) + calcu00734A(seed));
</script>

<template>
  <div class="blk">comp01097: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
