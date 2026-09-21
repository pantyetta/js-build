<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01288B, calcu00917B, calcu01061A, calcu01391A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01288B(seed) - calcu00917B(seed) + calcu01061A(seed) - calcu01391A(seed));
</script>

<template>
  <div class="blk">comp01817: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(142 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(322 50% 50%);
  display: inline-block;
}
</style>
