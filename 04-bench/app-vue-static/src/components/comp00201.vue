<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01438B, calcu01254A, calcu01453A, calcu01112B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01438B(seed) - calcu01254A(seed) + calcu01453A(seed) - calcu01112B(seed));
</script>

<template>
  <div class="blk">comp00201: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(216 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(36 50% 50%);
  display: inline-block;
}
</style>
