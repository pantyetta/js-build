<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00095B, calcu00770B, calcu00221A, calcu00932A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00095B(seed) - calcu00770B(seed) + calcu00221A(seed) - calcu00932A(seed));
</script>

<template>
  <div class="blk">comp01578: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(165 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(345 50% 50%);
  display: inline-block;
}
</style>
