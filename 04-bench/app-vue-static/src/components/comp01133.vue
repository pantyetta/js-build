<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00142B, calcu00486A, calcu00416A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00142B(seed) - calcu00486A(seed) + calcu00416A(seed));
</script>

<template>
  <div class="blk">comp01133: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(232 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(52 50% 50%);
  display: inline-block;
}
</style>
