<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01300A, calcu00481B, calcu00766A, calcu01025B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01300A(seed) - calcu00481B(seed) + calcu00766A(seed) - calcu01025B(seed));
</script>

<template>
  <div class="blk">comp00780: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(158 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(338 50% 50%);
  display: inline-block;
}
</style>
