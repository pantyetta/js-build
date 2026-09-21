<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00291B, calcu00025A, calcu01196A, calcu00408A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00291B(seed) - calcu00025A(seed) + calcu01196A(seed) - calcu00408A(seed));
</script>

<template>
  <div class="blk">comp01119: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(347 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(167 50% 50%);
  display: inline-block;
}
</style>
