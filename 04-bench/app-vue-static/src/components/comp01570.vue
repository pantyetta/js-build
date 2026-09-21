<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00030A, calcu01348A, calcu00163A, calcu01144B, calcu00721B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00030A(seed) - calcu01348A(seed) + calcu00163A(seed) - calcu01144B(seed) + calcu00721B(seed));
</script>

<template>
  <div class="blk">comp01570: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
