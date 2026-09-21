<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01077A, calcu00018B, calcu00693B, calcu00863B, calcu00594B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01077A(seed) - calcu00018B(seed) + calcu00693B(seed) - calcu00863B(seed) + calcu00594B(seed));
</script>

<template>
  <div class="blk">comp00372: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(21 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(201 50% 50%);
  display: inline-block;
}
</style>
