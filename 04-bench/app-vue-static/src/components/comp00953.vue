<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01317A, calcu00734A, calcu00272A, calcu00963A, calcu00007B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01317A(seed) - calcu00734A(seed) + calcu00272A(seed) - calcu00963A(seed) + calcu00007B(seed));
</script>

<template>
  <div class="blk">comp00953: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(245 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(65 50% 50%);
  display: inline-block;
}
</style>
