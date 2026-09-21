<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00324B, calcu00338B, calcu00824A, calcu00815A, calcu01330B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00324B(seed) - calcu00338B(seed) + calcu00824A(seed) - calcu00815A(seed) + calcu01330B(seed));
</script>

<template>
  <div class="blk">comp01835: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>
