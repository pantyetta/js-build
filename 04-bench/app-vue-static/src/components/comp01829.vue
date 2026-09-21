<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00575A, calcu01400A, calcu00141A, calcu00552A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00575A(seed) - calcu01400A(seed) + calcu00141A(seed) - calcu00552A(seed));
</script>

<template>
  <div class="blk">comp01829: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(209 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(29 50% 50%);
  display: inline-block;
}
</style>
