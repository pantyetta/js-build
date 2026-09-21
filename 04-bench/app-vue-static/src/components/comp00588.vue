<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00238A, calcu01586A, calcu01170B, calcu01469B, calcu01400A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00238A(seed) - calcu01586A(seed) + calcu01170B(seed) - calcu01469B(seed) + calcu01400A(seed));
</script>

<template>
  <div class="blk">comp00588: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(90 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(270 50% 50%);
  display: inline-block;
}
</style>
