<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01060B, calcu01136A, calcu01504B, calcu00553B, calcu01072B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01060B(seed) - calcu01136A(seed) + calcu01504B(seed) - calcu00553B(seed) + calcu01072B(seed));
</script>

<template>
  <div class="blk">comp01851: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(173 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(353 50% 50%);
  display: inline-block;
}
</style>
