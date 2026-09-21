<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00346B, calcu01560B, calcu00744B, calcu00340A, calcu01363B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00346B(seed) - calcu01560B(seed) + calcu00744B(seed) - calcu00340A(seed) + calcu01363B(seed));
</script>

<template>
  <div class="blk">comp01008: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
