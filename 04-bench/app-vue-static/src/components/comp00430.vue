<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01468B, calcu01011A, calcu00960A, calcu01102B, calcu00652A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01468B(seed) - calcu01011A(seed) + calcu00960A(seed) - calcu01102B(seed) + calcu00652A(seed));
</script>

<template>
  <div class="blk">comp00430: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(326 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(146 50% 50%);
  display: inline-block;
}
</style>
