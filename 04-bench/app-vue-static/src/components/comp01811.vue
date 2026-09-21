<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00860B, calcu00141A, calcu00406B, calcu01055A, calcu00689B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00860B(seed) - calcu00141A(seed) + calcu00406B(seed) - calcu01055A(seed) + calcu00689B(seed));
</script>

<template>
  <div class="blk">comp01811: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(195 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(15 50% 50%);
  display: inline-block;
}
</style>
