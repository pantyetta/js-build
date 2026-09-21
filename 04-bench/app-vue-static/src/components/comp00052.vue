<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00418A, calcu01124B, calcu00498B, calcu00687A, calcu01102B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00418A(seed) - calcu01124B(seed) + calcu00498B(seed) - calcu00687A(seed) + calcu01102B(seed));
</script>

<template>
  <div class="blk">comp00052: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>
