<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01295B, calcu00848B, calcu00652B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01295B(seed) - calcu00848B(seed) + calcu00652B(seed));
</script>

<template>
  <div class="blk">comp01026: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
