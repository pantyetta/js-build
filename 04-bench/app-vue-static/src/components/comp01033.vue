<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00823A, calcu01257B, calcu00789A, calcu00922B, calcu00652A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00823A(seed) - calcu01257B(seed) + calcu00789A(seed) - calcu00922B(seed) + calcu00652A(seed));
</script>

<template>
  <div class="blk">comp01033: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>
