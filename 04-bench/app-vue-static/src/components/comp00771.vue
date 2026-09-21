<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01109B, calcu01286A, calcu00226B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01109B(seed) - calcu01286A(seed) + calcu00226B(seed));
</script>

<template>
  <div class="blk">comp00771: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(99 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(279 50% 50%);
  display: inline-block;
}
</style>
