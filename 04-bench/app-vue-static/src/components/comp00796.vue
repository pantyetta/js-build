<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00349B, calcu00523B, calcu00088B, calcu00249A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00349B(seed) - calcu00523B(seed) + calcu00088B(seed) - calcu00249A(seed));
</script>

<template>
  <div class="blk">comp00796: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(104 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(284 50% 50%);
  display: inline-block;
}
</style>
