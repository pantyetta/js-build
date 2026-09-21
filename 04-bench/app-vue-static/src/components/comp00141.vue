<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01287A, calcu00193B, calcu01542B } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01287A(seed) - calcu00193B(seed) + calcu01542B(seed));
</script>

<template>
  <div class="blk">comp00141: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
