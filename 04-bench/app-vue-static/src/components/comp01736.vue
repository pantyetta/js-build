<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01456B, calcu00366B, calcu00794A, calcu01562A, calcu00662A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01456B(seed) - calcu00366B(seed) + calcu00794A(seed) - calcu01562A(seed) + calcu00662A(seed));
</script>

<template>
  <div class="blk">comp01736: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>
