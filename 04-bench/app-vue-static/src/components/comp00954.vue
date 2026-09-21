<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00398B, calcu00965B, calcu00577A, calcu01435A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00398B(seed) - calcu00965B(seed) + calcu00577A(seed) - calcu01435A(seed));
</script>

<template>
  <div class="blk">comp00954: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(29 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(209 50% 50%);
  display: inline-block;
}
</style>
