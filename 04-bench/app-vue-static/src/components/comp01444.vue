<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00905A, calcu00475B, calcu00418B, calcu00043A, calcu00298B } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00905A(seed) - calcu00475B(seed) + calcu00418B(seed) - calcu00043A(seed) + calcu00298B(seed));
</script>

<template>
  <div class="blk">comp01444: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
