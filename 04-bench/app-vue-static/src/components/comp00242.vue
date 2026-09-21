<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01143A, calcu01309A, calcu01113A, calcu00209B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01143A(seed) - calcu01309A(seed) + calcu01113A(seed) - calcu00209B(seed));
</script>

<template>
  <div class="blk">comp00242: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
