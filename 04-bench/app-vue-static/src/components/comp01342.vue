<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00370B, calcu01270B, calcu00935B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00370B(seed) - calcu01270B(seed) + calcu00935B(seed));
</script>

<template>
  <div class="blk">comp01342: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(118 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(298 50% 50%);
  display: inline-block;
}
</style>
