<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01591A, calcu01589B, calcu00100A, calcu00695A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01591A(seed) - calcu01589B(seed) + calcu00100A(seed) - calcu00695A(seed));
</script>

<template>
  <div class="blk">comp01876: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
