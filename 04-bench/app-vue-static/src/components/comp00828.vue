<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00497A, calcu00146A, calcu00357B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00497A(seed) - calcu00146A(seed) + calcu00357B(seed));
</script>

<template>
  <div class="blk">comp00828: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
