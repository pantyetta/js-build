<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00805B, calcu01157A, calcu01589A, calcu00996A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00805B(seed) - calcu01157A(seed) + calcu01589A(seed) - calcu00996A(seed));
</script>

<template>
  <div class="blk">comp01210: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(119 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(299 50% 50%);
  display: inline-block;
}
</style>
