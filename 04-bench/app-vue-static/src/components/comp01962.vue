<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01019B, calcu01590A, calcu00500A, calcu00153A, calcu01589A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu01019B(seed) - calcu01590A(seed) + calcu00500A(seed) - calcu00153A(seed) + calcu01589A(seed));
</script>

<template>
  <div class="blk">comp01962: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
