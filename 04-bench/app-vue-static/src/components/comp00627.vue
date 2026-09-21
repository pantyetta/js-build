<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01117B, calcu00617A, calcu00712A, calcu01293B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01117B(seed) - calcu00617A(seed) + calcu00712A(seed) - calcu01293B(seed));
</script>

<template>
  <div class="blk">comp00627: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(329 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(149 50% 50%);
  display: inline-block;
}
</style>
