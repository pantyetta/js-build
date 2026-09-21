<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00595A, calcu00364B, calcu00567A, calcu00786B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00595A(seed) - calcu00364B(seed) + calcu00567A(seed) - calcu00786B(seed));
</script>

<template>
  <div class="blk">comp00157: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(317 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(137 50% 50%);
  display: inline-block;
}
</style>
