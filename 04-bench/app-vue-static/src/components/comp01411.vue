<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01474A, calcu00461A, calcu00183A, calcu00684B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01474A(seed) - calcu00461A(seed) + calcu00183A(seed) - calcu00684B(seed));
</script>

<template>
  <div class="blk">comp01411: {{ total }}</div>
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
