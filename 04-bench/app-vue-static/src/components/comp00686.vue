<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01455A, calcu01180B, calcu01365A, calcu00219A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01455A(seed) - calcu01180B(seed) + calcu01365A(seed) - calcu00219A(seed));
</script>

<template>
  <div class="blk">comp00686: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
