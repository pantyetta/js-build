<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00566A, calcu01377A, calcu00489B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00566A(seed) - calcu01377A(seed) + calcu00489B(seed));
</script>

<template>
  <div class="blk">comp00343: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(249 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(69 50% 50%);
  display: inline-block;
}
</style>
