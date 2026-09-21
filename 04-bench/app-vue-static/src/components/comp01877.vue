<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00750A, calcu00080A, calcu00841B, calcu00302B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00750A(seed) - calcu00080A(seed) + calcu00841B(seed) - calcu00302B(seed));
</script>

<template>
  <div class="blk">comp01877: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(194 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(14 50% 50%);
  display: inline-block;
}
</style>
