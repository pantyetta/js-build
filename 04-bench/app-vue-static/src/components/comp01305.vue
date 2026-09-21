<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00822B, calcu00206B, calcu01542B, calcu01599A, calcu00358A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00822B(seed) - calcu00206B(seed) + calcu01542B(seed) - calcu01599A(seed) + calcu00358A(seed));
</script>

<template>
  <div class="blk">comp01305: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
