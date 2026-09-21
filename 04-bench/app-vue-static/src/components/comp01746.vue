<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00096A, calcu00105A, calcu01099A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00096A(seed) - calcu00105A(seed) + calcu01099A(seed));
</script>

<template>
  <div class="blk">comp01746: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(116 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(296 50% 50%);
  display: inline-block;
}
</style>
