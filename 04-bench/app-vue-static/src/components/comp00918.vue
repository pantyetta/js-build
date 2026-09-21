<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01528B, calcu00808A, calcu00546B, calcu00652B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01528B(seed) - calcu00808A(seed) + calcu00546B(seed) - calcu00652B(seed));
</script>

<template>
  <div class="blk">comp00918: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(230 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(50 50% 50%);
  display: inline-block;
}
</style>
