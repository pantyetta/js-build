<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00399B, calcu00076A, calcu01282A, calcu00186B, calcu01304B } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00399B(seed) - calcu00076A(seed) + calcu01282A(seed) - calcu00186B(seed) + calcu01304B(seed));
</script>

<template>
  <div class="blk">comp00488: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(229 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(49 50% 50%);
  display: inline-block;
}
</style>
