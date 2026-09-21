<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00515A, calcu00153A, calcu01016A, calcu00265B, calcu01359B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00515A(seed) - calcu00153A(seed) + calcu01016A(seed) - calcu00265B(seed) + calcu01359B(seed));
</script>

<template>
  <div class="blk">comp01728: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>
