<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01195B, calcu00223A, calcu00518A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01195B(seed) - calcu00223A(seed) + calcu00518A(seed));
</script>

<template>
  <div class="blk">comp01129: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
