<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00699A, calcu01384A, calcu00976A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00699A(seed) - calcu01384A(seed) + calcu00976A(seed));
</script>

<template>
  <div class="blk">comp00878: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(187 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(7 50% 50%);
  display: inline-block;
}
</style>
