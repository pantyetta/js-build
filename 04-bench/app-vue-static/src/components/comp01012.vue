<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01313B, calcu00550B, calcu00208B, calcu00491B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01313B(seed) - calcu00550B(seed) + calcu00208B(seed) - calcu00491B(seed));
</script>

<template>
  <div class="blk">comp01012: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(314 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(134 50% 50%);
  display: inline-block;
}
</style>
