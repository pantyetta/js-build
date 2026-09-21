<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01450B, calcu00468B, calcu01042B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01450B(seed) - calcu00468B(seed) + calcu01042B(seed));
</script>

<template>
  <div class="blk">comp01419: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
