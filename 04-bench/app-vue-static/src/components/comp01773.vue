<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00302B, calcu01175B, calcu01400B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00302B(seed) - calcu01175B(seed) + calcu01400B(seed));
</script>

<template>
  <div class="blk">comp01773: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(153 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(333 50% 50%);
  display: inline-block;
}
</style>
