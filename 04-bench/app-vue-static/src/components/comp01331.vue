<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00208B, calcu00096B, calcu00066A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00208B(seed) - calcu00096B(seed) + calcu00066A(seed));
</script>

<template>
  <div class="blk">comp01331: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(116 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(296 50% 50%);
  display: inline-block;
}
</style>
