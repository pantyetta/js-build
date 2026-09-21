<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00122B, calcu00711A, calcu00244A, calcu01538B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00122B(seed) - calcu00711A(seed) + calcu00244A(seed) - calcu01538B(seed));
</script>

<template>
  <div class="blk">comp01930: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(303 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(123 50% 50%);
  display: inline-block;
}
</style>
