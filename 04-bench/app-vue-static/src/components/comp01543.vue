<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00113A, calcu00376B, calcu00531A, calcu00512A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00113A(seed) - calcu00376B(seed) + calcu00531A(seed) - calcu00512A(seed));
</script>

<template>
  <div class="blk">comp01543: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(59 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(239 50% 50%);
  display: inline-block;
}
</style>
