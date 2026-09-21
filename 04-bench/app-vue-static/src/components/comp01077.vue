<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00977B, calcu00771B, calcu00037A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00977B(seed) - calcu00771B(seed) + calcu00037A(seed));
</script>

<template>
  <div class="blk">comp01077: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(133 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(313 50% 50%);
  display: inline-block;
}
</style>
