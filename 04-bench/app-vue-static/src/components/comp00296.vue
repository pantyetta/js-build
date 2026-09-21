<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00663A, calcu00932A, calcu01461A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00663A(seed) - calcu00932A(seed) + calcu01461A(seed));
</script>

<template>
  <div class="blk">comp00296: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
