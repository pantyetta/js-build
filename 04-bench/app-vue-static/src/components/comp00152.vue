<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00675B, calcu00301A, calcu00037B, calcu00755B, calcu01314B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00675B(seed) - calcu00301A(seed) + calcu00037B(seed) - calcu00755B(seed) + calcu01314B(seed));
</script>

<template>
  <div class="blk">comp00152: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(263 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(83 50% 50%);
  display: inline-block;
}
</style>
