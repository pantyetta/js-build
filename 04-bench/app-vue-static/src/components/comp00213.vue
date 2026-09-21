<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00965B, calcu00026A, calcu01359B, calcu00939B, calcu00179A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu00965B(seed) - calcu00026A(seed) + calcu01359B(seed) - calcu00939B(seed) + calcu00179A(seed));
</script>

<template>
  <div class="blk">comp00213: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>
