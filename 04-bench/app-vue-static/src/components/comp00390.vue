<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01091A, calcu00335B, calcu00587A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01091A(seed) - calcu00335B(seed) + calcu00587A(seed));
</script>

<template>
  <div class="blk">comp00390: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(236 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(56 50% 50%);
  display: inline-block;
}
</style>
