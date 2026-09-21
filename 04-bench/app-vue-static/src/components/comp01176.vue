<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00308A, calcu01410A, calcu00631A, calcu01490A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00308A(seed) - calcu01410A(seed) + calcu00631A(seed) - calcu01490A(seed));
</script>

<template>
  <div class="blk">comp01176: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(313 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(133 50% 50%);
  display: inline-block;
}
</style>
