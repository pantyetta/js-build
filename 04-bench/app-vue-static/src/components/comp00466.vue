<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00238B, calcu00773A, calcu00132B, calcu01180B, calcu01260A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00238B(seed) - calcu00773A(seed) + calcu00132B(seed) - calcu01180B(seed) + calcu01260A(seed));
</script>

<template>
  <div class="blk">comp00466: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
