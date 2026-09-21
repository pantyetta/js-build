<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00028B, calcu00721A, calcu00724A, calcu00451A, calcu00634A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00028B(seed) - calcu00721A(seed) + calcu00724A(seed) - calcu00451A(seed) + calcu00634A(seed));
</script>

<template>
  <div class="blk">comp00511: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(254 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(74 50% 50%);
  display: inline-block;
}
</style>
