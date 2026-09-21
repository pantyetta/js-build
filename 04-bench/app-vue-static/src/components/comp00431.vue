<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00831A, calcu00530A, calcu00522B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00831A(seed) - calcu00530A(seed) + calcu00522B(seed));
</script>

<template>
  <div class="blk">comp00431: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>
