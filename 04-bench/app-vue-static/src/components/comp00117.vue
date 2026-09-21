<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu00078A, calcu00748A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01342B(seed) - calcu00078A(seed) + calcu00748A(seed));
</script>

<template>
  <div class="blk">comp00117: {{ total }}</div>
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
