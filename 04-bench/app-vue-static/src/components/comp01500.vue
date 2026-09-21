<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00537A, calcu00834B, calcu00023A, calcu00545A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00537A(seed) - calcu00834B(seed) + calcu00023A(seed) - calcu00545A(seed));
</script>

<template>
  <div class="blk">comp01500: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(1 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(181 50% 50%);
  display: inline-block;
}
</style>
