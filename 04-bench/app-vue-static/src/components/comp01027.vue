<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00821A, calcu00344B, calcu01263A, calcu00293A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00821A(seed) - calcu00344B(seed) + calcu01263A(seed) - calcu00293A(seed));
</script>

<template>
  <div class="blk">comp01027: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(57 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(237 50% 50%);
  display: inline-block;
}
</style>
