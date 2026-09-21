<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00236B, calcu00877A, calcu00480A, calcu00845B, calcu00153A } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu00236B(seed) - calcu00877A(seed) + calcu00480A(seed) - calcu00845B(seed) + calcu00153A(seed));
</script>

<template>
  <div class="blk">comp00129: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(61 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(241 50% 50%);
  display: inline-block;
}
</style>
