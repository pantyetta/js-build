<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01418B, calcu00545B, calcu00198B, calcu00011A, calcu00614A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01418B(seed) - calcu00545B(seed) + calcu00198B(seed) - calcu00011A(seed) + calcu00614A(seed));
</script>

<template>
  <div class="blk">comp01739: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(185 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(5 50% 50%);
  display: inline-block;
}
</style>
