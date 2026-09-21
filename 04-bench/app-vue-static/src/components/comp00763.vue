<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00134A, calcu00675B, calcu00270B, calcu00301A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00134A(seed) - calcu00675B(seed) + calcu00270B(seed) - calcu00301A(seed));
</script>

<template>
  <div class="blk">comp00763: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
