<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01414B, calcu00371B, calcu00282A, calcu00564A, calcu00988A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01414B(seed) - calcu00371B(seed) + calcu00282A(seed) - calcu00564A(seed) + calcu00988A(seed));
</script>

<template>
  <div class="blk">comp01487: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(86 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(266 50% 50%);
  display: inline-block;
}
</style>
