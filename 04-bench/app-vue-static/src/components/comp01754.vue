<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00278A, calcu01230A, calcu00190A, calcu01596A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00278A(seed) - calcu01230A(seed) + calcu00190A(seed) - calcu01596A(seed));
</script>

<template>
  <div class="blk">comp01754: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>
