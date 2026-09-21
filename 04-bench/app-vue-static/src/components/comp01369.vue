<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00858B, calcu00891B, calcu01262A, calcu00264B, calcu00830B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00858B(seed) - calcu00891B(seed) + calcu01262A(seed) - calcu00264B(seed) + calcu00830B(seed));
</script>

<template>
  <div class="blk">comp01369: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(46 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(226 50% 50%);
  display: inline-block;
}
</style>
