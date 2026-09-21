<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01587A, calcu00976B, calcu01316A, calcu01443A, calcu01497A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu01587A(seed) - calcu00976B(seed) + calcu01316A(seed) - calcu01443A(seed) + calcu01497A(seed));
</script>

<template>
  <div class="blk">comp01904: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(85 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(265 50% 50%);
  display: inline-block;
}
</style>
