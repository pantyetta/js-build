<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00530A, calcu00974B, calcu01048B, calcu01392A, calcu01340B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00530A(seed) - calcu00974B(seed) + calcu01048B(seed) - calcu01392A(seed) + calcu01340B(seed));
</script>

<template>
  <div class="blk">comp00937: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(230 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(50 50% 50%);
  display: inline-block;
}
</style>
