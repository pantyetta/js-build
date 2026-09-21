<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01165A, calcu01274B, calcu01299A, calcu01451A, calcu00677A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01165A(seed) - calcu01274B(seed) + calcu01299A(seed) - calcu01451A(seed) + calcu00677A(seed));
</script>

<template>
  <div class="blk">comp01740: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(141 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(321 50% 50%);
  display: inline-block;
}
</style>
