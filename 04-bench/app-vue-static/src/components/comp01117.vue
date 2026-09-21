<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00549B, calcu00125A, calcu00921A, calcu01319A, calcu00845A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00549B(seed) - calcu00125A(seed) + calcu00921A(seed) - calcu01319A(seed) + calcu00845A(seed));
</script>

<template>
  <div class="blk">comp01117: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>
