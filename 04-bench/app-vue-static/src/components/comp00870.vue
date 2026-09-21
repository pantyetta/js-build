<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00366B, calcu00706A, calcu00042B, calcu00062B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00366B(seed) - calcu00706A(seed) + calcu00042B(seed) - calcu00062B(seed));
</script>

<template>
  <div class="blk">comp00870: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(352 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(172 50% 50%);
  display: inline-block;
}
</style>
