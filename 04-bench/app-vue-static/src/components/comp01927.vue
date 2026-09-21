<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00166A, calcu00503A, calcu01374A, calcu01408B, calcu00494B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00166A(seed) - calcu00503A(seed) + calcu01374A(seed) - calcu01408B(seed) + calcu00494B(seed));
</script>

<template>
  <div class="blk">comp01927: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(55 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(235 50% 50%);
  display: inline-block;
}
</style>
