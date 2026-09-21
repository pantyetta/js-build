<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00105B, calcu00478B, calcu01451A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00105B(seed) - calcu00478B(seed) + calcu01451A(seed));
</script>

<template>
  <div class="blk">comp01431: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(76 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(256 50% 50%);
  display: inline-block;
}
</style>
