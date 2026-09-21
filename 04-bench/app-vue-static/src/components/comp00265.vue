<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00854A, calcu00337A, calcu00071B, calcu00556A, calcu00731B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00854A(seed) - calcu00337A(seed) + calcu00071B(seed) - calcu00556A(seed) + calcu00731B(seed));
</script>

<template>
  <div class="blk">comp00265: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
