<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00820A, calcu01162A, calcu00354A, calcu00580B, calcu01302B } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00820A(seed) - calcu01162A(seed) + calcu00354A(seed) - calcu00580B(seed) + calcu01302B(seed));
</script>

<template>
  <div class="blk">comp00109: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(112 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(292 50% 50%);
  display: inline-block;
}
</style>
