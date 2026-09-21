<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00728A, calcu01134B, calcu00098A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00728A(seed) - calcu01134B(seed) + calcu00098A(seed));
</script>

<template>
  <div class="blk">comp01972: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(326 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(146 50% 50%);
  display: inline-block;
}
</style>
