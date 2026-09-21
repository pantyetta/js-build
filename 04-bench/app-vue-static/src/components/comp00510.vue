<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00257A, calcu00150A, calcu01189B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00257A(seed) - calcu00150A(seed) + calcu01189B(seed));
</script>

<template>
  <div class="blk">comp00510: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(345 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(165 50% 50%);
  display: inline-block;
}
</style>
