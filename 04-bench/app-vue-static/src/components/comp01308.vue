<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00576B, calcu01278B, calcu00508B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00576B(seed) - calcu01278B(seed) + calcu00508B(seed));
</script>

<template>
  <div class="blk">comp01308: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>
