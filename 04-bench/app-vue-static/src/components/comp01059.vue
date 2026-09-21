<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01590A, calcu00635A, calcu00103B, calcu00075B, calcu00713A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01590A(seed) - calcu00635A(seed) + calcu00103B(seed) - calcu00075B(seed) + calcu00713A(seed));
</script>

<template>
  <div class="blk">comp01059: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(194 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(14 50% 50%);
  display: inline-block;
}
</style>
