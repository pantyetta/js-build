<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01047A, calcu00523A, calcu01261B, calcu00551B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01047A(seed) - calcu00523A(seed) + calcu01261B(seed) - calcu00551B(seed));
</script>

<template>
  <div class="blk">comp01524: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(104 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(284 50% 50%);
  display: inline-block;
}
</style>
