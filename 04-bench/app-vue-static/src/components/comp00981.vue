<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00150A, calcu00145A, calcu01307A, calcu01482A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00150A(seed) - calcu00145A(seed) + calcu01307A(seed) - calcu01482A(seed));
</script>

<template>
  <div class="blk">comp00981: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(259 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(79 50% 50%);
  display: inline-block;
}
</style>
