<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00208B, calcu00379B, calcu01227A, calcu01550B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00208B(seed) - calcu00379B(seed) + calcu01227A(seed) - calcu01550B(seed));
</script>

<template>
  <div class="blk">comp01416: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(299 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(119 50% 50%);
  display: inline-block;
}
</style>
