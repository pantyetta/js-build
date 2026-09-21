<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00289A, calcu00458B, calcu00278B, calcu00009A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00289A(seed) - calcu00458B(seed) + calcu00278B(seed) - calcu00009A(seed));
</script>

<template>
  <div class="blk">comp01861: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>
