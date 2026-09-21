<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01454A, calcu01210A, calcu01298A, calcu00251B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01454A(seed) - calcu01210A(seed) + calcu01298A(seed) - calcu00251B(seed));
</script>

<template>
  <div class="blk">comp01940: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(161 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(341 50% 50%);
  display: inline-block;
}
</style>
