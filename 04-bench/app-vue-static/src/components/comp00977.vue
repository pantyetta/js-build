<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01513A, calcu00872B, calcu01090B, calcu00918A, calcu00117A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01513A(seed) - calcu00872B(seed) + calcu01090B(seed) - calcu00918A(seed) + calcu00117A(seed));
</script>

<template>
  <div class="blk">comp00977: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
