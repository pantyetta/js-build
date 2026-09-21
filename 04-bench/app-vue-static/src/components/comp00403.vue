<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00055B, calcu00093A, calcu00817B, calcu01223B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00055B(seed) - calcu00093A(seed) + calcu00817B(seed) - calcu01223B(seed));
</script>

<template>
  <div class="blk">comp00403: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
