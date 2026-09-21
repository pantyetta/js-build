<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01324A, calcu00274B, calcu00833A, calcu00792A, calcu00244A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01324A(seed) - calcu00274B(seed) + calcu00833A(seed) - calcu00792A(seed) + calcu00244A(seed));
</script>

<template>
  <div class="blk">comp01493: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(111 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(291 50% 50%);
  display: inline-block;
}
</style>
