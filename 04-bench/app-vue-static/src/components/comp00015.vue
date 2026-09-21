<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00865B, calcu00356A, calcu00763A, calcu01063A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00865B(seed) - calcu00356A(seed) + calcu00763A(seed) - calcu01063A(seed));
</script>

<template>
  <div class="blk">comp00015: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(153 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(333 50% 50%);
  display: inline-block;
}
</style>
