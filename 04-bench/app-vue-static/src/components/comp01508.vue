<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00839A, calcu00771B, calcu00738A, calcu00834A, calcu00993A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00839A(seed) - calcu00771B(seed) + calcu00738A(seed) - calcu00834A(seed) + calcu00993A(seed));
</script>

<template>
  <div class="blk">comp01508: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(193 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(13 50% 50%);
  display: inline-block;
}
</style>
