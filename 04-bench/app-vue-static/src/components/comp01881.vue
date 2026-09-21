<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00286B, calcu00094B, calcu01511A, calcu01458A, calcu01507B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00286B(seed) - calcu00094B(seed) + calcu01511A(seed) - calcu01458A(seed) + calcu01507B(seed));
</script>

<template>
  <div class="blk">comp01881: {{ total }}</div>
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
