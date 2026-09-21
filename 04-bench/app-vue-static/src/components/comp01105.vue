<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00091B, calcu00366B, calcu01429A, calcu00114A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00091B(seed) - calcu00366B(seed) + calcu01429A(seed) - calcu00114A(seed));
</script>

<template>
  <div class="blk">comp01105: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(174 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(354 50% 50%);
  display: inline-block;
}
</style>
