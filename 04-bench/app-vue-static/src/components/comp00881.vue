<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00737A, calcu01533B, calcu01073B, calcu00991B, calcu01013B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00737A(seed) - calcu01533B(seed) + calcu01073B(seed) - calcu00991B(seed) + calcu01013B(seed));
</script>

<template>
  <div class="blk">comp00881: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(120 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(300 50% 50%);
  display: inline-block;
}
</style>
