<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00733A, calcu01010B, calcu01469B, calcu01124B, calcu00440B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00733A(seed) - calcu01010B(seed) + calcu01469B(seed) - calcu01124B(seed) + calcu00440B(seed));
</script>

<template>
  <div class="blk">comp01734: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(23 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(203 50% 50%);
  display: inline-block;
}
</style>
