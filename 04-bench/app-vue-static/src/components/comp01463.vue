<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00400B, calcu01220A, calcu00936B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00400B(seed) - calcu01220A(seed) + calcu00936B(seed));
</script>

<template>
  <div class="blk">comp01463: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(294 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(114 50% 50%);
  display: inline-block;
}
</style>
