<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01385B, calcu00392A, calcu01564A, calcu00327B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01385B(seed) - calcu00392A(seed) + calcu01564A(seed) - calcu00327B(seed));
</script>

<template>
  <div class="blk">comp01934: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(225 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(45 50% 50%);
  display: inline-block;
}
</style>
