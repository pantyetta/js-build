<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00580A, calcu00066A, calcu01460B, calcu00417A, calcu00009A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00580A(seed) - calcu00066A(seed) + calcu01460B(seed) - calcu00417A(seed) + calcu00009A(seed));
</script>

<template>
  <div class="blk">comp01621: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(162 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(342 50% 50%);
  display: inline-block;
}
</style>
