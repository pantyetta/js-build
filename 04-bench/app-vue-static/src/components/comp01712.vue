<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00697A, calcu01066A, calcu01193B, calcu00735A, calcu00798A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00697A(seed) - calcu01066A(seed) + calcu01193B(seed) - calcu00735A(seed) + calcu00798A(seed));
</script>

<template>
  <div class="blk">comp01712: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(304 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(124 50% 50%);
  display: inline-block;
}
</style>
