<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00844B, calcu00867B, calcu01064A, calcu00166A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00844B(seed) - calcu00867B(seed) + calcu01064A(seed) - calcu00166A(seed));
</script>

<template>
  <div class="blk">comp01270: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
