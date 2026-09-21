<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00564A, calcu01539A, calcu00087A, calcu00522B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00564A(seed) - calcu01539A(seed) + calcu00087A(seed) - calcu00522B(seed));
</script>

<template>
  <div class="blk">comp00909: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
