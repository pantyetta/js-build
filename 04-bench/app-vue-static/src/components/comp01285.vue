<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00795B, calcu00673B, calcu00835A, calcu01043A, calcu00701B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00795B(seed) - calcu00673B(seed) + calcu00835A(seed) - calcu01043A(seed) + calcu00701B(seed));
</script>

<template>
  <div class="blk">comp01285: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(152 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(332 50% 50%);
  display: inline-block;
}
</style>
