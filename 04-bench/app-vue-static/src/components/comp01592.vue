<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00193A, calcu00975B, calcu00681B, calcu00583B, calcu00732A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00193A(seed) - calcu00975B(seed) + calcu00681B(seed) - calcu00583B(seed) + calcu00732A(seed));
</script>

<template>
  <div class="blk">comp01592: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(327 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(147 50% 50%);
  display: inline-block;
}
</style>
