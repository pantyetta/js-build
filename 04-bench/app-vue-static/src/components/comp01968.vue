<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00390B, calcu01491A, calcu00102A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00390B(seed) - calcu01491A(seed) + calcu00102A(seed));
</script>

<template>
  <div class="blk">comp01968: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(68 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(248 50% 50%);
  display: inline-block;
}
</style>
