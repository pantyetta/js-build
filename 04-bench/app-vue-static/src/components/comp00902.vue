<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00761B, calcu01519A, calcu00636A, calcu01417B, calcu01028B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00761B(seed) - calcu01519A(seed) + calcu00636A(seed) - calcu01417B(seed) + calcu01028B(seed));
</script>

<template>
  <div class="blk">comp00902: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(0 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(180 50% 50%);
  display: inline-block;
}
</style>
