<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01047B, calcu00004A, calcu00245B, calcu01416B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01047B(seed) - calcu00004A(seed) + calcu00245B(seed) - calcu01416B(seed));
</script>

<template>
  <div class="blk">comp01257: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>
