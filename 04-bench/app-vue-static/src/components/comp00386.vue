<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00082B, calcu00747A, calcu01580A, calcu01039B, calcu01022A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00082B(seed) - calcu00747A(seed) + calcu01580A(seed) - calcu01039B(seed) + calcu01022A(seed));
</script>

<template>
  <div class="blk">comp00386: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(320 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(140 50% 50%);
  display: inline-block;
}
</style>
