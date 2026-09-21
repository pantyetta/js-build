<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00839A, calcu00593B, calcu00247A, calcu01127A, calcu00200B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00839A(seed) - calcu00593B(seed) + calcu00247A(seed) - calcu01127A(seed) + calcu00200B(seed));
</script>

<template>
  <div class="blk">comp01038: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>
