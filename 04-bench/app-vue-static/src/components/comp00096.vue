<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00921A, calcu00665A, calcu00519A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00921A(seed) - calcu00665A(seed) + calcu00519A(seed));
</script>

<template>
  <div class="blk">comp00096: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
