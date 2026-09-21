<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00609B, calcu00430B, calcu00168A, calcu00644B, calcu00859B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00609B(seed) - calcu00430B(seed) + calcu00168A(seed) - calcu00644B(seed) + calcu00859B(seed));
</script>

<template>
  <div class="blk">comp01131: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
