<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01219A, calcu00914B, calcu00298B } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01219A(seed) - calcu00914B(seed) + calcu00298B(seed));
</script>

<template>
  <div class="blk">comp01690: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(147 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(327 50% 50%);
  display: inline-block;
}
</style>
