<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00965A, calcu00375B, calcu00198B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00965A(seed) - calcu00375B(seed) + calcu00198B(seed));
</script>

<template>
  <div class="blk">comp00076: {{ total }}</div>
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
