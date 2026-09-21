<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01018B, calcu00569B, calcu00398B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu01018B(seed) - calcu00569B(seed) + calcu00398B(seed));
</script>

<template>
  <div class="blk">comp01025: {{ total }}</div>
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
