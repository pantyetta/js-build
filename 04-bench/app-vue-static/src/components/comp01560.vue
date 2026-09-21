<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01133B, calcu00831A, calcu00071A, calcu01093B, calcu00265B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01133B(seed) - calcu00831A(seed) + calcu00071A(seed) - calcu01093B(seed) + calcu00265B(seed));
</script>

<template>
  <div class="blk">comp01560: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(250 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(70 50% 50%);
  display: inline-block;
}
</style>
