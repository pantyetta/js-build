<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00199B, calcu00134A, calcu00674B, calcu00002B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00199B(seed) - calcu00134A(seed) + calcu00674B(seed) - calcu00002B(seed));
</script>

<template>
  <div class="blk">comp01399: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(199 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(19 50% 50%);
  display: inline-block;
}
</style>
