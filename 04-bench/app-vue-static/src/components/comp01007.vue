<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01163B, calcu00439A, calcu00638A, calcu00310B, calcu00392A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01163B(seed) - calcu00439A(seed) + calcu00638A(seed) - calcu00310B(seed) + calcu00392A(seed));
</script>

<template>
  <div class="blk">comp01007: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(15 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(195 50% 50%);
  display: inline-block;
}
</style>
