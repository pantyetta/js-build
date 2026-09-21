<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01566A, calcu01237B, calcu00141B, calcu01382B, calcu01340B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01566A(seed) - calcu01237B(seed) + calcu00141B(seed) - calcu01382B(seed) + calcu01340B(seed));
</script>

<template>
  <div class="blk">comp00740: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(54 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(234 50% 50%);
  display: inline-block;
}
</style>
