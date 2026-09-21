<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00181B, calcu00783A, calcu01260A, calcu00975A, calcu00853B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00181B(seed) - calcu00783A(seed) + calcu01260A(seed) - calcu00975A(seed) + calcu00853B(seed));
</script>

<template>
  <div class="blk">comp01902: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
