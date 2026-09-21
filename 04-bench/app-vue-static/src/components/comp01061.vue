<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01167B, calcu00978A, calcu00987B, calcu00063A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01167B(seed) - calcu00978A(seed) + calcu00987B(seed) - calcu00063A(seed));
</script>

<template>
  <div class="blk">comp01061: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(328 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(148 50% 50%);
  display: inline-block;
}
</style>
