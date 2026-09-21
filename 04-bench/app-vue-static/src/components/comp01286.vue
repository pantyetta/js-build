<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00589B, calcu00116B, calcu00809A, calcu00355A, calcu00906B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00589B(seed) - calcu00116B(seed) + calcu00809A(seed) - calcu00355A(seed) + calcu00906B(seed));
</script>

<template>
  <div class="blk">comp01286: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(255 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(75 50% 50%);
  display: inline-block;
}
</style>
