<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00097A, calcu00831A, calcu00622B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00097A(seed) - calcu00831A(seed) + calcu00622B(seed));
</script>

<template>
  <div class="blk">comp00199: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(122 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(302 50% 50%);
  display: inline-block;
}
</style>
