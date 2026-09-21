<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00628B, calcu01362A, calcu00993B, calcu01461B, calcu01438A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00628B(seed) - calcu01362A(seed) + calcu00993B(seed) - calcu01461B(seed) + calcu01438A(seed));
</script>

<template>
  <div class="blk">comp01701: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(180 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(0 50% 50%);
  display: inline-block;
}
</style>
