<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00456A, calcu01547B, calcu00312A, calcu00203A, calcu00694A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00456A(seed) - calcu01547B(seed) + calcu00312A(seed) - calcu00203A(seed) + calcu00694A(seed));
</script>

<template>
  <div class="blk">comp00528: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(123 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(303 50% 50%);
  display: inline-block;
}
</style>
