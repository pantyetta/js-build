<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00472B, calcu00962B, calcu00051B, calcu01006A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00472B(seed) - calcu00962B(seed) + calcu00051B(seed) - calcu01006A(seed));
</script>

<template>
  <div class="blk">comp01627: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(333 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(153 50% 50%);
  display: inline-block;
}
</style>
