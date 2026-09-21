<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00299B, calcu00336A, calcu00817B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00299B(seed) - calcu00336A(seed) + calcu00817B(seed));
</script>

<template>
  <div class="blk">comp01908: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(306 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(126 50% 50%);
  display: inline-block;
}
</style>
