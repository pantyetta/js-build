<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01243B, calcu00106A, calcu01327A, calcu00439B, calcu00910A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01243B(seed) - calcu00106A(seed) + calcu01327A(seed) - calcu00439B(seed) + calcu00910A(seed));
</script>

<template>
  <div class="blk">comp01106: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(287 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(107 50% 50%);
  display: inline-block;
}
</style>
