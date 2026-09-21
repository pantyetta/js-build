<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00480A, calcu00316B, calcu01512A, calcu00001B, calcu00284B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00480A(seed) - calcu00316B(seed) + calcu01512A(seed) - calcu00001B(seed) + calcu00284B(seed));
</script>

<template>
  <div class="blk">comp00761: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(65 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(245 50% 50%);
  display: inline-block;
}
</style>
