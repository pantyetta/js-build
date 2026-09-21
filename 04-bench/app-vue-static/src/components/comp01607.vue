<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00097A, calcu00525A, calcu01398B, calcu00106B, calcu00259A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00097A(seed) - calcu00525A(seed) + calcu01398B(seed) - calcu00106B(seed) + calcu00259A(seed));
</script>

<template>
  <div class="blk">comp01607: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(138 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(318 50% 50%);
  display: inline-block;
}
</style>
