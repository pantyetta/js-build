<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01179B, calcu00554B, calcu00347A, calcu00845A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01179B(seed) - calcu00554B(seed) + calcu00347A(seed) - calcu00845A(seed));
</script>

<template>
  <div class="blk">comp01606: {{ total }}</div>
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
