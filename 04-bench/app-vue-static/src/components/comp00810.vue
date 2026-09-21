<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00277B, calcu01154A, calcu00048B, calcu00400A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00277B(seed) - calcu01154A(seed) + calcu00048B(seed) - calcu00400A(seed));
</script>

<template>
  <div class="blk">comp00810: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(336 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(156 50% 50%);
  display: inline-block;
}
</style>
