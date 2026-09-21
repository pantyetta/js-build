<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00406B, calcu00759A, calcu00357B, calcu01308B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00406B(seed) - calcu00759A(seed) + calcu00357B(seed) - calcu01308B(seed));
</script>

<template>
  <div class="blk">comp01360: {{ total }}</div>
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
