<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00754A, calcu00424B, calcu00756B, calcu00566A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00754A(seed) - calcu00424B(seed) + calcu00756B(seed) - calcu00566A(seed));
</script>

<template>
  <div class="blk">comp00728: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(33 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(213 50% 50%);
  display: inline-block;
}
</style>
