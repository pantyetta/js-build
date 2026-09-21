<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01564B, calcu00919A, calcu00720B, calcu01028A, calcu00538B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01564B(seed) - calcu00919A(seed) + calcu00720B(seed) - calcu01028A(seed) + calcu00538B(seed));
</script>

<template>
  <div class="blk">comp00392: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(130 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(310 50% 50%);
  display: inline-block;
}
</style>
