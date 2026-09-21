<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01428A, calcu01547A, calcu00017B, calcu00391A, calcu00970B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01428A(seed) - calcu01547A(seed) + calcu00017B(seed) - calcu00391A(seed) + calcu00970B(seed));
</script>

<template>
  <div class="blk">comp01499: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
