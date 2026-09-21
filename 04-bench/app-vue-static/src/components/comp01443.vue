<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00783A, calcu00409B, calcu00524B, calcu00468B, calcu00647A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00783A(seed) - calcu00409B(seed) + calcu00524B(seed) - calcu00468B(seed) + calcu00647A(seed));
</script>

<template>
  <div class="blk">comp01443: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>
