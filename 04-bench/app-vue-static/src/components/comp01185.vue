<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01444B, calcu00632B, calcu00306A, calcu01326B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01444B(seed) - calcu00632B(seed) + calcu00306A(seed) - calcu01326B(seed));
</script>

<template>
  <div class="blk">comp01185: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(289 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(109 50% 50%);
  display: inline-block;
}
</style>
