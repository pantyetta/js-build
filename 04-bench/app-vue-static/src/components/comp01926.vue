<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01362B, calcu01390B, calcu00247B, calcu00085A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01362B(seed) - calcu01390B(seed) + calcu00247B(seed) - calcu00085A(seed));
</script>

<template>
  <div class="blk">comp01926: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
