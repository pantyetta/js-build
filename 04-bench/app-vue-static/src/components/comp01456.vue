<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01008B, calcu00839A, calcu00972B, calcu00539B, calcu01555A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01008B(seed) - calcu00839A(seed) + calcu00972B(seed) - calcu00539B(seed) + calcu01555A(seed));
</script>

<template>
  <div class="blk">comp01456: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(146 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(326 50% 50%);
  display: inline-block;
}
</style>
