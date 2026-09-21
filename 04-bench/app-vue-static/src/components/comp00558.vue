<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01118B, calcu00064A, calcu00252A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01118B(seed) - calcu00064A(seed) + calcu00252A(seed));
</script>

<template>
  <div class="blk">comp00558: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
