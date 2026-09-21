<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00376A, calcu00820B, calcu00379B, calcu01355B, calcu00374B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00376A(seed) - calcu00820B(seed) + calcu00379B(seed) - calcu01355B(seed) + calcu00374B(seed));
</script>

<template>
  <div class="blk">comp00409: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(103 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(283 50% 50%);
  display: inline-block;
}
</style>
