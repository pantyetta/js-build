<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00768A, calcu00227B, calcu01309A, calcu00872A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00768A(seed) - calcu00227B(seed) + calcu01309A(seed) - calcu00872A(seed));
</script>

<template>
  <div class="blk">comp01492: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(134 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(314 50% 50%);
  display: inline-block;
}
</style>
