<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01465B, calcu00165A, calcu00671A, calcu00188B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01465B(seed) - calcu00165A(seed) + calcu00671A(seed) - calcu00188B(seed));
</script>

<template>
  <div class="blk">comp00098: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(187 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(7 50% 50%);
  display: inline-block;
}
</style>
