<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00391B, calcu00846A, calcu00255B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00391B(seed) - calcu00846A(seed) + calcu00255B(seed));
</script>

<template>
  <div class="blk">comp01378: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(112 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(292 50% 50%);
  display: inline-block;
}
</style>
