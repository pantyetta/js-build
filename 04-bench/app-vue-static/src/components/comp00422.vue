<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00567B, calcu00564A, calcu00379A, calcu01058A, calcu00413B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00567B(seed) - calcu00564A(seed) + calcu00379A(seed) - calcu01058A(seed) + calcu00413B(seed));
</script>

<template>
  <div class="blk">comp00422: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(168 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(348 50% 50%);
  display: inline-block;
}
</style>
