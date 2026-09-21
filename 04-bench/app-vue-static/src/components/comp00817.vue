<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00830A, calcu00774A, calcu01564B, calcu01107A, calcu00340B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00830A(seed) - calcu00774A(seed) + calcu01564B(seed) - calcu01107A(seed) + calcu00340B(seed));
</script>

<template>
  <div class="blk">comp00817: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(72 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(252 50% 50%);
  display: inline-block;
}
</style>
