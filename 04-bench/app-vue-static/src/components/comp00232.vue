<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00048A, calcu00991B, calcu01165A, calcu01045A, calcu00488B } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00048A(seed) - calcu00991B(seed) + calcu01165A(seed) - calcu01045A(seed) + calcu00488B(seed));
</script>

<template>
  <div class="blk">comp00232: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(265 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(85 50% 50%);
  display: inline-block;
}
</style>
