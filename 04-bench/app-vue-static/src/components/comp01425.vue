<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01388B, calcu00292A, calcu01265B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01388B(seed) - calcu00292A(seed) + calcu01265B(seed));
</script>

<template>
  <div class="blk">comp01425: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
