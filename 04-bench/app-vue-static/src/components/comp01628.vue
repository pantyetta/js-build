<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01461A, calcu00669B, calcu00332B, calcu01230B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01461A(seed) - calcu00669B(seed) + calcu00332B(seed) - calcu01230B(seed));
</script>

<template>
  <div class="blk">comp01628: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
