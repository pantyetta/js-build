<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00893B, calcu01567A, calcu00826B, calcu01200A, calcu00111B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00893B(seed) - calcu01567A(seed) + calcu00826B(seed) - calcu01200A(seed) + calcu00111B(seed));
</script>

<template>
  <div class="blk">comp01178: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
