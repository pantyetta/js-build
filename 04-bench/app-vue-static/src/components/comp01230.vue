<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00595A, calcu01542B, calcu01134B, calcu01030A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00595A(seed) - calcu01542B(seed) + calcu01134B(seed) - calcu01030A(seed));
</script>

<template>
  <div class="blk">comp01230: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(9 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(189 50% 50%);
  display: inline-block;
}
</style>
