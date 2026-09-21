<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00610B, calcu01006A, calcu01339B, calcu00578A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00610B(seed) - calcu01006A(seed) + calcu01339B(seed) - calcu00578A(seed));
</script>

<template>
  <div class="blk">comp01638: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(69 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(249 50% 50%);
  display: inline-block;
}
</style>
