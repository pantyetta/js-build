<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01591A, calcu00485B, calcu00156A, calcu00647A, calcu01398A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01591A(seed) - calcu00485B(seed) + calcu00156A(seed) - calcu00647A(seed) + calcu01398A(seed));
</script>

<template>
  <div class="blk">comp01116: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
