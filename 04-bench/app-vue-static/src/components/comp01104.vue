<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01178B, calcu00167A, calcu01163B, calcu00001B, calcu00119A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01178B(seed) - calcu00167A(seed) + calcu01163B(seed) - calcu00001B(seed) + calcu00119A(seed));
</script>

<template>
  <div class="blk">comp01104: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(210 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(30 50% 50%);
  display: inline-block;
}
</style>
