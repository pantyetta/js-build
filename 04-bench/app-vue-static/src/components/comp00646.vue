<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01128A, calcu01561A, calcu01358A, calcu00927B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu01128A(seed) - calcu01561A(seed) + calcu01358A(seed) - calcu00927B(seed));
</script>

<template>
  <div class="blk">comp00646: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(300 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(120 50% 50%);
  display: inline-block;
}
</style>
