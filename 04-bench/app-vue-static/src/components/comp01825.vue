<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00941A, calcu00515A, calcu00224A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00941A(seed) - calcu00515A(seed) + calcu00224A(seed));
</script>

<template>
  <div class="blk">comp01825: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(16 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(196 50% 50%);
  display: inline-block;
}
</style>
