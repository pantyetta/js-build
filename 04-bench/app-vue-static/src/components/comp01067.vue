<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01564A, calcu01194A, calcu00709A, calcu00632B, calcu01366A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01564A(seed) - calcu01194A(seed) + calcu00709A(seed) - calcu00632B(seed) + calcu01366A(seed));
</script>

<template>
  <div class="blk">comp01067: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(134 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(314 50% 50%);
  display: inline-block;
}
</style>
