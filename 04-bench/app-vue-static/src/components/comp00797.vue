<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00991A, calcu00360A, calcu00191B, calcu00449B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00991A(seed) - calcu00360A(seed) + calcu00191B(seed) - calcu00449B(seed));
</script>

<template>
  <div class="blk">comp00797: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
