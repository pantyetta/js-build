<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01169A, calcu00754A, calcu00467A, calcu00241A, calcu01476B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01169A(seed) - calcu00754A(seed) + calcu00467A(seed) - calcu00241A(seed) + calcu01476B(seed));
</script>

<template>
  <div class="blk">comp00800: {{ total }}</div>
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
