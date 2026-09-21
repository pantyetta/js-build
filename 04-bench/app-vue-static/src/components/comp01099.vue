<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00987B, calcu00277B, calcu01550B, calcu01347B, calcu01205A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00987B(seed) - calcu00277B(seed) + calcu01550B(seed) - calcu01347B(seed) + calcu01205A(seed));
</script>

<template>
  <div class="blk">comp01099: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
