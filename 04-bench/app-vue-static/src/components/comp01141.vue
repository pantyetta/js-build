<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01405A, calcu00422A, calcu00520B, calcu00020B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu01405A(seed) - calcu00422A(seed) + calcu00520B(seed) - calcu00020B(seed));
</script>

<template>
  <div class="blk">comp01141: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>
