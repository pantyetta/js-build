<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00127B, calcu00617B, calcu00172A, calcu01233A, calcu00670A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00127B(seed) - calcu00617B(seed) + calcu00172A(seed) - calcu01233A(seed) + calcu00670A(seed));
</script>

<template>
  <div class="blk">comp01413: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
