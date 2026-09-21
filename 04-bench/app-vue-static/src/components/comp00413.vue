<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01345A, calcu00981A, calcu00916B, calcu01240A, calcu00982A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01345A(seed) - calcu00981A(seed) + calcu00916B(seed) - calcu01240A(seed) + calcu00982A(seed));
</script>

<template>
  <div class="blk">comp00413: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(12 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(192 50% 50%);
  display: inline-block;
}
</style>
