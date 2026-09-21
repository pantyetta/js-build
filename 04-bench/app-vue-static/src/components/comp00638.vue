<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00496A, calcu01308A, calcu00817B, calcu01034B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00496A(seed) - calcu01308A(seed) + calcu00817B(seed) - calcu01034B(seed));
</script>

<template>
  <div class="blk">comp00638: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
