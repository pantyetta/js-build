<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00415B, calcu00442A, calcu00571B, calcu00888A, calcu00497A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00415B(seed) - calcu00442A(seed) + calcu00571B(seed) - calcu00888A(seed) + calcu00497A(seed));
</script>

<template>
  <div class="blk">comp01275: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(247 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(67 50% 50%);
  display: inline-block;
}
</style>
