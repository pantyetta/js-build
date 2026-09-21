<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01480A, calcu00208B, calcu00608B, calcu01374A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01480A(seed) - calcu00208B(seed) + calcu00608B(seed) - calcu01374A(seed));
</script>

<template>
  <div class="blk">comp01678: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(321 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(141 50% 50%);
  display: inline-block;
}
</style>
