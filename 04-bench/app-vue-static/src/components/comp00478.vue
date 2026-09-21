<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00690A, calcu00603A, calcu00933A, calcu00554A, calcu00763B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00690A(seed) - calcu00603A(seed) + calcu00933A(seed) - calcu00554A(seed) + calcu00763B(seed));
</script>

<template>
  <div class="blk">comp00478: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(90 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(270 50% 50%);
  display: inline-block;
}
</style>
