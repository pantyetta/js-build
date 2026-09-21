<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01461B, calcu00602A, calcu01018B, calcu00205A, calcu01316A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01461B(seed) - calcu00602A(seed) + calcu01018B(seed) - calcu00205A(seed) + calcu01316A(seed));
</script>

<template>
  <div class="blk">comp00972: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(164 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(344 50% 50%);
  display: inline-block;
}
</style>
