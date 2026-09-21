<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01167A, calcu00955A, calcu00623A, calcu01004B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01167A(seed) - calcu00955A(seed) + calcu00623A(seed) - calcu01004B(seed));
</script>

<template>
  <div class="blk">comp01250: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(149 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(329 50% 50%);
  display: inline-block;
}
</style>
