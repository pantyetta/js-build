<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00139A, calcu00512B, calcu00630A } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00139A(seed) - calcu00512B(seed) + calcu00630A(seed));
</script>

<template>
  <div class="blk">comp01496: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(71 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(251 50% 50%);
  display: inline-block;
}
</style>
