<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00784A, calcu01274B, calcu01061A, calcu00328B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00784A(seed) - calcu01274B(seed) + calcu01061A(seed) - calcu00328B(seed));
</script>

<template>
  <div class="blk">comp01318: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(205 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(25 50% 50%);
  display: inline-block;
}
</style>
