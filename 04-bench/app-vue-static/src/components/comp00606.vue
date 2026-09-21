<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01172A, calcu00660A, calcu00698B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01172A(seed) - calcu00660A(seed) + calcu00698B(seed));
</script>

<template>
  <div class="blk">comp00606: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>
