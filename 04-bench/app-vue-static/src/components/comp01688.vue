<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00428A, calcu00597B, calcu01191B, calcu01507B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00428A(seed) - calcu00597B(seed) + calcu01191B(seed) - calcu01507B(seed));
</script>

<template>
  <div class="blk">comp01688: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(266 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(86 50% 50%);
  display: inline-block;
}
</style>
