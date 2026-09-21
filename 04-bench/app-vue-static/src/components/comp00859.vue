<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00068A, calcu00429A, calcu00616A, calcu00491B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00068A(seed) - calcu00429A(seed) + calcu00616A(seed) - calcu00491B(seed));
</script>

<template>
  <div class="blk">comp00859: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
