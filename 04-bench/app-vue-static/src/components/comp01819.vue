<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01316A, calcu00621A, calcu00488A, calcu00880A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01316A(seed) - calcu00621A(seed) + calcu00488A(seed) - calcu00880A(seed));
</script>

<template>
  <div class="blk">comp01819: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(127 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(307 50% 50%);
  display: inline-block;
}
</style>
