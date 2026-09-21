<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00259B, calcu00852B, calcu01118B, calcu00525B, calcu01510A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00259B(seed) - calcu00852B(seed) + calcu01118B(seed) - calcu00525B(seed) + calcu01510A(seed));
</script>

<template>
  <div class="blk">comp01544: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(61 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(241 50% 50%);
  display: inline-block;
}
</style>
