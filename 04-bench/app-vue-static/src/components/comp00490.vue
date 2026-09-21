<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00747A, calcu00983A, calcu00631A, calcu00235B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00747A(seed) - calcu00983A(seed) + calcu00631A(seed) - calcu00235B(seed));
</script>

<template>
  <div class="blk">comp00490: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
