<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00079B, calcu01300A, calcu00191A, calcu00720A, calcu00951A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00079B(seed) - calcu01300A(seed) + calcu00191A(seed) - calcu00720A(seed) + calcu00951A(seed));
</script>

<template>
  <div class="blk">comp01870: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(180 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(0 50% 50%);
  display: inline-block;
}
</style>
