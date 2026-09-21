<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01465B, calcu00533A, calcu01269A, calcu01383B, calcu01315A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01465B(seed) - calcu00533A(seed) + calcu01269A(seed) - calcu01383B(seed) + calcu01315A(seed));
</script>

<template>
  <div class="blk">comp00086: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(123 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(303 50% 50%);
  display: inline-block;
}
</style>
