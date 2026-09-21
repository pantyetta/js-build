<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342A, calcu01131B, calcu01360A, calcu00132B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01342A(seed) - calcu01131B(seed) + calcu01360A(seed) - calcu00132B(seed));
</script>

<template>
  <div class="blk">comp00998: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(111 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(291 50% 50%);
  display: inline-block;
}
</style>
