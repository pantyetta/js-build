<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00967A, calcu00699B, calcu00260A, calcu01070B, calcu00614B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00967A(seed) - calcu00699B(seed) + calcu00260A(seed) - calcu01070B(seed) + calcu00614B(seed));
</script>

<template>
  <div class="blk">comp01794: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(157 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(337 50% 50%);
  display: inline-block;
}
</style>
