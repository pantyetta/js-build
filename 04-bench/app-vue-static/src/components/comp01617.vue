<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00680B, calcu01580A, calcu00082B, calcu00524B, calcu01544A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00680B(seed) - calcu01580A(seed) + calcu00082B(seed) - calcu00524B(seed) + calcu01544A(seed));
</script>

<template>
  <div class="blk">comp01617: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(77 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(257 50% 50%);
  display: inline-block;
}
</style>
