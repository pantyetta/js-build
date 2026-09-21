<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00144B, calcu01451A, calcu00650A, calcu00221B, calcu00257A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu00144B(seed) - calcu01451A(seed) + calcu00650A(seed) - calcu00221B(seed) + calcu00257A(seed));
</script>

<template>
  <div class="blk">comp01671: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(204 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(24 50% 50%);
  display: inline-block;
}
</style>
