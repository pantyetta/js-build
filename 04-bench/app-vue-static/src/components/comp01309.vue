<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00366B, calcu00254A, calcu01543A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00366B(seed) - calcu00254A(seed) + calcu01543A(seed));
</script>

<template>
  <div class="blk">comp01309: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(18 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(198 50% 50%);
  display: inline-block;
}
</style>
