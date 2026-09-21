<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00306A, calcu01291B, calcu00557A, calcu00755B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00306A(seed) - calcu01291B(seed) + calcu00557A(seed) - calcu00755B(seed));
</script>

<template>
  <div class="blk">comp00567: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(8 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(188 50% 50%);
  display: inline-block;
}
</style>
