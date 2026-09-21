<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00264B, calcu00344B, calcu00586A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00264B(seed) - calcu00344B(seed) + calcu00586A(seed));
</script>

<template>
  <div class="blk">comp01219: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(28 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(208 50% 50%);
  display: inline-block;
}
</style>
