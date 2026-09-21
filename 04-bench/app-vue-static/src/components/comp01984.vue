<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01043A, calcu00743A, calcu00757A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01043A(seed) - calcu00743A(seed) + calcu00757A(seed));
</script>

<template>
  <div class="blk">comp01984: {{ total }}</div>
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
