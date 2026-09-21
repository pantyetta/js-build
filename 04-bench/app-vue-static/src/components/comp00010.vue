<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00696A, calcu01302B, calcu00206A, calcu00460B, calcu00827B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00696A(seed) - calcu01302B(seed) + calcu00206A(seed) - calcu00460B(seed) + calcu00827B(seed));
</script>

<template>
  <div class="blk">comp00010: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(221 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(41 50% 50%);
  display: inline-block;
}
</style>
