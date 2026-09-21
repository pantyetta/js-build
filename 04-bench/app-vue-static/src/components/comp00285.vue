<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00693A, calcu00258A, calcu01475B, calcu01427B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00693A(seed) - calcu00258A(seed) + calcu01475B(seed) - calcu01427B(seed));
</script>

<template>
  <div class="blk">comp00285: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(45 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(225 50% 50%);
  display: inline-block;
}
</style>
