<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00130A, calcu00078A, calcu00247A, calcu00896B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00130A(seed) - calcu00078A(seed) + calcu00247A(seed) - calcu00896B(seed));
</script>

<template>
  <div class="blk">comp01907: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(10 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(190 50% 50%);
  display: inline-block;
}
</style>
