<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01053A, calcu00668A, calcu00052A, calcu00244B, calcu00340A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01053A(seed) - calcu00668A(seed) + calcu00052A(seed) - calcu00244B(seed) + calcu00340A(seed));
</script>

<template>
  <div class="blk">comp01894: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(236 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(56 50% 50%);
  display: inline-block;
}
</style>
