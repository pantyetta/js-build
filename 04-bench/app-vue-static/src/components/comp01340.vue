<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01556B, calcu01194A, calcu01138A, calcu00260B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01556B(seed) - calcu01194A(seed) + calcu01138A(seed) - calcu00260B(seed));
</script>

<template>
  <div class="blk">comp01340: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(183 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(3 50% 50%);
  display: inline-block;
}
</style>
