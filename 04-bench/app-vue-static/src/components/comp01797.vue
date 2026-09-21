<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00488B, calcu00261A, calcu00489A, calcu00335A, calcu00355A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00488B(seed) - calcu00261A(seed) + calcu00489A(seed) - calcu00335A(seed) + calcu00355A(seed));
</script>

<template>
  <div class="blk">comp01797: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(110 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(290 50% 50%);
  display: inline-block;
}
</style>
