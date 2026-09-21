<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00066A, calcu01488A, calcu01079B, calcu00978B } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00066A(seed) - calcu01488A(seed) + calcu01079B(seed) - calcu00978B(seed));
</script>

<template>
  <div class="blk">comp01983: {{ total }}</div>
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
