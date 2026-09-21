<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00791A, calcu01406B, calcu00463A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00791A(seed) - calcu01406B(seed) + calcu00463A(seed));
</script>

<template>
  <div class="blk">comp00955: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(137 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(317 50% 50%);
  display: inline-block;
}
</style>
