<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00650A, calcu01078A, calcu00113A, calcu01254A, calcu00210A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00650A(seed) - calcu01078A(seed) + calcu00113A(seed) - calcu01254A(seed) + calcu00210A(seed));
</script>

<template>
  <div class="blk">comp00530: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(150 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(330 50% 50%);
  display: inline-block;
}
</style>
