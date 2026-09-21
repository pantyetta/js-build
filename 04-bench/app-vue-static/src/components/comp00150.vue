<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01416A, calcu00194A, calcu01352B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01416A(seed) - calcu00194A(seed) + calcu01352B(seed));
</script>

<template>
  <div class="blk">comp00150: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
