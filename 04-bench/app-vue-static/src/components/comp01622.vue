<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01197A, calcu01249A, calcu00532A, calcu00762A, calcu01061B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01197A(seed) - calcu01249A(seed) + calcu00532A(seed) - calcu00762A(seed) + calcu01061B(seed));
</script>

<template>
  <div class="blk">comp01622: {{ total }}</div>
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
