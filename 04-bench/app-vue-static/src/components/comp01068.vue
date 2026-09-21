<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00849B, calcu01134B, calcu00486A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00849B(seed) - calcu01134B(seed) + calcu00486A(seed));
</script>

<template>
  <div class="blk">comp01068: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
