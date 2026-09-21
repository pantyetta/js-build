<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01357B, calcu01147B, calcu00161B, calcu00580B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01357B(seed) - calcu01147B(seed) + calcu00161B(seed) - calcu00580B(seed));
</script>

<template>
  <div class="blk">comp00380: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
