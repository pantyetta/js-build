<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01198B, calcu00535B, calcu00390A, calcu00948B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01198B(seed) - calcu00535B(seed) + calcu00390A(seed) - calcu00948B(seed));
</script>

<template>
  <div class="blk">comp01634: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
