<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01102B, calcu01032B, calcu00564B, calcu00789A, calcu01036A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01102B(seed) - calcu01032B(seed) + calcu00564B(seed) - calcu00789A(seed) + calcu01036A(seed));
</script>

<template>
  <div class="blk">comp01596: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(38 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(218 50% 50%);
  display: inline-block;
}
</style>
