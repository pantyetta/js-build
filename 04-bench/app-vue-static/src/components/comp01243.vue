<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00525B, calcu00166B, calcu01474A, calcu01246B, calcu00437A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00525B(seed) - calcu00166B(seed) + calcu01474A(seed) - calcu01246B(seed) + calcu00437A(seed));
</script>

<template>
  <div class="blk">comp01243: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(41 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(221 50% 50%);
  display: inline-block;
}
</style>
