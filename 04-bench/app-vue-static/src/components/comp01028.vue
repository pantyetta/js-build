<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00097B, calcu00092A, calcu01584B, calcu00735A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00097B(seed) - calcu00092A(seed) + calcu01584B(seed) - calcu00735A(seed));
</script>

<template>
  <div class="blk">comp01028: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(125 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(305 50% 50%);
  display: inline-block;
}
</style>
