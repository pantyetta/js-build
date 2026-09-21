<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01255B, calcu01462B, calcu00998B, calcu00720B, calcu00304B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01255B(seed) - calcu01462B(seed) + calcu00998B(seed) - calcu00720B(seed) + calcu00304B(seed));
</script>

<template>
  <div class="blk">comp00554: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(308 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(128 50% 50%);
  display: inline-block;
}
</style>
