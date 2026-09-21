<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01259A, calcu00479B, calcu00270B, calcu01045A, calcu01544B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01259A(seed) - calcu00479B(seed) + calcu00270B(seed) - calcu01045A(seed) + calcu01544B(seed));
</script>

<template>
  <div class="blk">comp01613: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(293 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(113 50% 50%);
  display: inline-block;
}
</style>
