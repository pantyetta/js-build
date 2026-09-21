<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00199A, calcu00277B, calcu00528B, calcu01241A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00199A(seed) - calcu00277B(seed) + calcu00528B(seed) - calcu01241A(seed));
</script>

<template>
  <div class="blk">comp00611: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(167 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(347 50% 50%);
  display: inline-block;
}
</style>
