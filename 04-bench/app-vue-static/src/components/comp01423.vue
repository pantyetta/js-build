<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00415B, calcu01036A, calcu00555B, calcu01051B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00415B(seed) - calcu01036A(seed) + calcu00555B(seed) - calcu01051B(seed));
</script>

<template>
  <div class="blk">comp01423: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(195 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(15 50% 50%);
  display: inline-block;
}
</style>
