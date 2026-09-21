<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00913B, calcu01308A, calcu01228A, calcu00926A, calcu00930A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00913B(seed) - calcu01308A(seed) + calcu01228A(seed) - calcu00926A(seed) + calcu00930A(seed));
</script>

<template>
  <div class="blk">comp01488: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(301 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(121 50% 50%);
  display: inline-block;
}
</style>
