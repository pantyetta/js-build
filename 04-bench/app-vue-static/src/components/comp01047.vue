<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01541B, calcu00044B, calcu00800A, calcu01296B, calcu00213B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01541B(seed) - calcu00044B(seed) + calcu00800A(seed) - calcu01296B(seed) + calcu00213B(seed));
</script>

<template>
  <div class="blk">comp01047: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(110 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(290 50% 50%);
  display: inline-block;
}
</style>
